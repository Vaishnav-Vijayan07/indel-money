"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import BranchForm from "@/components/common/BranchForm";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import api from "../../../lib/api/axios";
import { renderHtml } from "@/lib/utils/htmlParser";

// Dynamically import BranchLocationMap with SSR disabled
const BranchLocationMap = dynamic(() => import("@/components/features/home/BranchLocationMap"), {
  ssr: false,
});

export default function BranchLocator({ variant = "default", pageContent }) {
  const searchParams = useSearchParams();
  const [branchLocations, setBranchLocations] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    district: "",
    location: "",
    distance: "",
  });
  const [userLocation, setUserLocation] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [error, setError] = useState(null);

  const fetchStates = useCallback(async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/states`);
      if (data.success) {
        setStates(data.data);
      } else {
        setError("Failed to fetch states: " + data.message);
      }
    } catch (error) {
      setError("Error fetching states: " + error.message);
    }
  }, []);

  const fetchDistricts = useCallback(async (stateId) => {
    try {
      const url = stateId ? `/api/career/districts/by_state/${stateId}` : `/api/career/districts`;
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
      if (data.success) {
        setDistricts(data.data);
      } else {
        setError("Failed to fetch districts: " + data.message);
      }
    } catch (error) {
      setError("Error fetching districts: " + error.message);
    }
  }, []);

  const fetchLocations = useCallback(async (stateId, districtId) => {
    try {
      const url =
        stateId && districtId
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations/by_district_state`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations`;
      const params = stateId && districtId ? { state_id: stateId, district_id: districtId } : {};
      const { data } = await api.get(url, { params });
      if (data.success) {
        setLocations(data.data);
      } else {
        setError("Failed to fetch locations: " + data.message);
      }
    } catch (error) {
      setError("Error fetching locations: " + error.message);
    }
  }, []);

  const fetchBranchLocations = useCallback(async () => {
    try {
      const { data } = await api.get("/branch/branches");
      if (data?.success) {
        setBranchLocations(data.data || []);
        setSelectedBranch(data.data?.[0] || null);
      } else {
        setError("Failed to fetch branch locations: " + data?.message);
      }
    } catch (error) {
      setError("Error fetching branch locations: " + error.message);
    }
  }, []);

  const fetchBranchLocationsFiltered = useCallback(async () => {
    try {
      const queryParams = {
        state: filters.state || undefined,
        district: filters.district || undefined,
        location: filters.location || undefined,
        distance: filters.distance || undefined,
        lat: filters.distance && userLocation?.latitude ? userLocation.latitude : undefined,
        long: filters.distance && userLocation?.longitude ? userLocation.longitude : undefined,
      };
      const { data } = await api.get("/branch/branches/filtered_branches", { params: queryParams });
      if (data?.success) {
        setBranchLocations(data.data || []);
        setSelectedBranch(data.data?.[0] || null);
      } else {
        setError("Failed to fetch filtered branch locations: " + data?.message);
      }
    } catch (error) {
      setError("Error fetching filtered branch locations: " + error.message);
    }
  }, [filters, userLocation]);

  const handleDistanceOpen = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError("Error fetching location: " + error.message);
      }
    );
  }, []);

  const handleBranchFormChange = useCallback(
    (field, value) => {
      setFilters((prev) => {
        const newFilters = { ...prev };
        if (field === "state") {
          newFilters.state = value;
          newFilters.district = "";
          newFilters.location = "";
          fetchDistricts(value);
        } else if (field === "district") {
          newFilters.district = value;
          newFilters.location = "";
          fetchLocations(newFilters.state, value);
        } else if (field === "location") {
          newFilters.location = value;
        } else if (field === "distance") {
          newFilters.distance = value;
        } else if (field === "clear") {
          return { state: "", district: "", location: "", distance: "" };
        }
        return newFilters;
      });
      if (field === "clear") {
        setUserLocation(null);
        setDistricts([]);
        setLocations([]);
        fetchBranchLocations();
      }
    },
    [fetchDistricts, fetchLocations, fetchBranchLocations]
  );

  useEffect(() => {
    const state = searchParams.get("state") || "";
    const district = searchParams.get("district") || "";
    const location = searchParams.get("location") || "";
    const distance = searchParams.get("distance") || "";

    setFilters({ state, district, location, distance });
    fetchStates();
    if (state) fetchDistricts(state);
    if (state && district) fetchLocations(state, district);

    if (isInitialLoad && !state && !district && !location && !distance) {
      fetchBranchLocations();
      fetchDistricts();
      fetchLocations();
    }

    setIsInitialLoad(false);
  }, [searchParams, isInitialLoad, fetchStates, fetchDistricts, fetchLocations, fetchBranchLocations]);

  useEffect(() => {
    if (!isInitialLoad && (filters.state || filters.district || filters.location || filters.distance)) {
      fetchBranchLocationsFiltered();
    }
  }, [filters, isInitialLoad, fetchBranchLocationsFiltered]);

  const sectionClasses = useMemo(
    () =>
      ({
        contact:
          "sm:bg-[#e6edf7] rounded-t-[10px] py-[20px_0] sm:py-[20px] lg:py-[30px] 2xl:py-[40px] 3xl:py-[50px] max-sm:shadow-[0_0_150px_0_rgba(0,0,0,0.25)]",
        branch: "pt-[30px] sm:pt-[40px] pb-[0px] 2xl:pt-[30px] 2xl:pb-[90px] 3xl:pt-[50px] 3xl:pb-[120px]",
      }[variant] || ""),
    [variant]
  );

  const containerClasses = useMemo(
    () =>
      ({
        contact: "mb-[15px] sm:mb-[20px] lg:mb-[30px]",
        branch: "mb-[35px]",
      }[variant] || "mb-[35px]"),
    [variant]
  );

  return (
    <section className={`${sectionClasses} w-full block`}>
      {error && <div className="container mx-auto text-red-500 mb-4">{error}</div>}
      <div>
        <div className="container">
          <div className={`flex flex-col lg:flex-row items-start xl:items-start justify-between flex-wrap ${containerClasses}`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-title1 w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-600px)] xl:pr-[40px] 2xl:pr-[60px] 3xl:pr-[80px] [&>span]:text-base2 [&>span]:font-bold"
            >
              {pageContent?.title ? renderHtml(pageContent.title) : ""}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden sm:flex w-full lg:w-[468px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[600px] mt-2 xl:mt-[10px] xl:text-right"
            >
              <p className="text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#323232]">
                {pageContent?.description || ""}
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto"
        >
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[12px] p-[12px] sm:p-[16px] lg:p-[20px] 2xl:p-[24px] mb-6">
            <BranchForm
              states={states}
              districts={districts}
              locations={locations}
              selectedState={filters.state}
              selectedDistrict={filters.district}
              selectedLocation={filters.location}
              selectedDistance={filters.distance}
              onValueChange={handleBranchFormChange}
              onOpenChange={handleDistanceOpen}
              isMobile={false}
            />
          </div>
        </motion.div>
      </div>
      <div
        className={
          variant === "home"
            ? "sm:pb-[45px] xl:pb-[60px] 2xl:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(255,2,2,0.1)] before:absolute before:bottom-0 before:left-0 before:-z-10 before:pointer-events-none before:rotate-180"
            : ""
        }
      >
        <div className="max-w-full container mx-auto">
          <BranchLocationMap
            branchLocations={branchLocations}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            userLocation={userLocation}
          />
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import BranchForm from "@/components/common/BranchForm";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import api from "../../../lib/api/axios";
// import { renderHtml } from "@/lib/utils/htmlParser";

// // Dynamically import BranchLocationMap with SSR disabled
// const BranchLocationMap = dynamic(() => import("@/components/features/home/BranchLocationMap"), {
//   ssr: false,
// });

// export default function BranchLocator({ variant = "default", pageContent }) {
//   
//   const searchParams = useSearchParams();
//   const [branchLocationsAPI, setBranchLocationsAPI] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedDistance, setSelectedDistance] = useState("");
//   const [userLocation, setUserLocation] = useState(null);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   const fetchStates = async () => {
//     try {
//       const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/states`);
//       if (data.success) {
//         setStates(data.data);
//       } else {
//         console.error("Failed to fetch states:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching states:", error);
//     }
//   };

//   const fetchDistricts = async (state_id) => {
//     try {
//       const url = state_id ? `/api/career/districts/by_state/${state_id}` : `/api/career/districts`;
//       const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
//       if (data.success) {
//         setDistricts(data.data);
//       } else {
//         console.error("Failed to fetch districts:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching districts:", error);
//     }
//   };

//   const fetchLocations = async (state_id, district_id) => {
//     try {
//       const url =
//         state_id && district_id
//           ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations/by_district_state`
//           : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations`;
//       const params = state_id && district_id ? { state_id, district_id } : {};
//       const { data } = await api.get(url, { params });
//       if (data.success) {
//         setLocations(data.data);
//       } else {
//         console.error("Failed to fetch locations:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//   };

//   const fetchBranchLocations = async () => {
//     try {
//       const { data } = await api.get("/branch/branches");
//       if (data?.success) {
//         setBranchLocationsAPI(data?.data || []);
//         setSelectedBranch(data?.data?.[0] || null);
//       } else {
//         console.error("Failed to fetch branch locations:", data?.message);
//       }
//     } catch (error) {
//       console.error("Error fetching branch locations:", error);
//     }
//   };

//   const fetchBranchLocationsFiltered = async () => {
//     try {
//       const queryParams = {
//         state: selectedState || undefined,
//         district: selectedDistrict || undefined,
//         location: selectedLocation || undefined,
//         distance: selectedDistance || undefined,
//         lat: (selectedDistance && userLocation?.latitude) || undefined,
//         long: (selectedDistance && userLocation?.longitude) || undefined,
//       };
//       const { data } = await api.get("/branch/branches/filtered_branches", { params: queryParams });
//       if (data?.success) {
//         setBranchLocationsAPI(data?.data || []);
//         setSelectedBranch(data?.data?.[0] || null);
//       } else {
//         console.error("Failed to fetch filtered branch locations:", data?.message);
//       }
//     } catch (error) {
//       console.error("Error fetching filtered branch locations:", error);
//     }
//   };

//   const handleDistanceOpen = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation not supported by this browser.");
//     }
//   };

//   const handleBranchFormChange = (field, value) => {
//     if (field === "state") {
//       setSelectedState(value);
//       setSelectedDistrict("");
//       setSelectedLocation("");
//       fetchDistricts(value);
//     } else if (field === "district") {
//       setSelectedDistrict(value);
//       setSelectedLocation("");
//       fetchLocations(selectedState, value);
//     } else if (field === "location") {
//       setSelectedLocation(value);
//     } else if (field === "distance") {
//       setSelectedDistance(value);
//     } else if (field === "clear") {
//       setSelectedState("");
//       setSelectedDistrict("");
//       setSelectedLocation("");
//       setSelectedDistance("");
//       setUserLocation(null);
//       setDistricts([]);
//       setLocations([]);
//       fetchBranchLocations();
//     }
//   };

//   useEffect(() => {
//     const state = searchParams.get("state") || "";
//     const district = searchParams.get("district") || "";
//     const location = searchParams.get("location") || "";
//     const distance = searchParams.get("distance") || "";

//     setSelectedState(state);
//     setSelectedDistrict(district);
//     setSelectedLocation(location);
//     setSelectedDistance(distance);

//     // Fetch initial data
//     fetchStates();
//     if (state) fetchDistricts(state);
//     if (state && district) fetchLocations(state, district);

//     // Only fetch branches on initial load if no query params
//     if (isInitialLoad && !state && !district && !location && !distance) {
//       fetchBranchLocations();
//       fetchDistricts();
//       fetchLocations();
//     }

//     setIsInitialLoad(false);

//     return () => {
//       // Cleanup if needed
//     };
//   }, [searchParams, isInitialLoad]);

//   useEffect(() => {
//     if (!isInitialLoad && (selectedState || selectedDistrict || selectedLocation || selectedDistance)) {
//       fetchBranchLocationsFiltered();
//     }
//   }, [selectedState, selectedDistrict, selectedLocation, selectedDistance, isInitialLoad]);

//   return (
//     <section
//       className={`${
//         variant === "contact"
//           ? "sm:bg-[#e6edf7] rounded-t-[10px] py-[20px_0] sm:py-[20px] lg:py-[30px] 2xl:py-[40px] 3xl:py-[50px] max-sm:shadow-[0_0_150px_0_rgba(0,0,0,0.25)]"
//           : ""
//       }
//       ${variant === "branch" ? "pt-[30px] sm:pt-[40px] pb-[0px] 2xl:pt-[30px] 2xl:pb-[90px] 3xl:pt-[50px] 3xl:pb-[120px]" : ""}
//       w-full block`}
//     >
//       <div>
//         <div className="container">
//           <div
//             className={`flex flex-col lg:flex-row items-start xl:items-start justify-between flex-wrap ${
//               variant === "contact" ? "mb-[15px] sm:mb-[20px] lg:mb-[30px]" : "mb-[35px]"
//             }`}
//           >
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-title1 w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-600px)] xl:pr-[40px] 2xl:pr-[60px] 3xl:pr-[80px] [&>span]:text-base2 [&>span]:font-bold"
//             >
//               {pageContent?.title ? renderHtml(pageContent?.title) : ""}
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="hidden sm:flex w-full lg:w-[468px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[600px] mt-2 xl:mt-[10px] xl:text-right"
//             >
//               <p className="text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#323232]">
//                 {pageContent?.description || ""}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//         <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="container mx-auto">
//           <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[12px] p-[12px] sm:p-[16px] lg:p-[20px] 2xl:p-[24px] mb-6">
//             <BranchForm
//               states={states}
//               districts={districts}
//               locations={locations}
//               selectedState={selectedState}
//               selectedDistrict={selectedDistrict}
//               selectedLocation={selectedLocation}
//               selectedDistance={selectedDistance}
//               onValueChange={handleBranchFormChange}
//               onOpenChange={handleDistanceOpen}
//               isMobile={false}
//             />
//           </div>
//         </motion.div>
//       </div>
//       <div
//         className={`${
//           variant === "home"
//             ? "sm:pb-[45px] xl:pb-[60px] 2xl:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(255,2,2,0.1)] before:absolute before:bottom-0 before:left-0 before:-z-10 before:pointer-events-none before:rotate-180"
//             : ""
//         }`}
//       >
//         <div className="max-w-full container mx-auto">
//           <BranchLocationMap branchLocations={branchLocationsAPI} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
//         </div>
//       </div>
//     </section>
//   );
// }
