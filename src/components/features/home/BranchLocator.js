"use client";

import React, { useEffect, useState, useCallback } from "react";
import BranchForm from "@/components/common/BranchForm";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import api from "../../../lib/api/axios";
import { renderHtml } from "@/lib/utils/htmlParser";
import debounce from "lodash/debounce";

// Dynamically import BranchLocationMap with SSR disabled
const BranchLocationMap = dynamic(() => import("@/components/features/home/BranchLocationMap"), {
  ssr: false,
});

export default function BranchLocator({ variant = "default", pageContent }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [allBranchLocations, setAllBranchLocations] = useState([]); // For map
  const [nearbyBranchLocations, setNearbyBranchLocations] = useState([]); // For list
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  console.log("selectedDistance ====>", selectedDistance);

  const fetchStates = useCallback(async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/states`);
      if (data.success) {
        setStates(data.data);
      } else {
        console.error("Failed to fetch states:", data.message);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  }, []);

  const fetchDistricts = useCallback(async (state_id) => {
    try {
      const url = state_id ? `/api/career/districts/by_state/${state_id}` : `/api/career/districts`;
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
      if (data.success) {
        setDistricts(data.data);
      } else {
        console.error("Failed to fetch districts:", data.message);
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  }, []);

  const fetchLocations = useCallback(async (state_id, district_id) => {
    try {
      const url =
        state_id && district_id
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations/by_district_state`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations`;
      const params = state_id && district_id ? { state_id, district_id } : {};
      const { data } = await api.get(url, { params });
      if (data.success) {
        setLocations(data.data);
      } else {
        console.error("Failed to fetch locations:", data.message);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  }, []);

  const fetchAllBranchLocations = useCallback(async () => {
    try {
      const { data } = await api.get("/branch/branches");
      if (data?.success) {
        setAllBranchLocations(data?.data || []);
        if (!selectedBranch) {
          setSelectedBranch(data?.data?.[0] || null);
        }
      } else {
        console.error("Failed to fetch all branch locations:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching all branch locations:", error);
    }
  }, [selectedBranch]);

  const debouncedFetchNearbyBranchLocations = useCallback(
    debounce(async (queryParams) => {
      try {
        const { data } = await api.get("/branch/branches/filtered_branches", { params: queryParams });
        if (data?.success) {
          setNearbyBranchLocations(data?.data || []);
          if (!selectedBranch && data?.data?.length > 0) {
            setSelectedBranch(data?.data?.[0]);
          }
        } else {
          console.error("Failed to fetch nearby branch locations:", data?.message);
        }
      } catch (error) {
        console.error("Error fetching nearby branch locations:", error);
      }
    }, 300),
    [selectedBranch]
  );

  const updateQueryParams = useCallback(
    (newParams) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const handleDistanceOpen = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          const distanceToUse = selectedDistance || "10";
          debouncedFetchNearbyBranchLocations({
            distance: distanceToUse,
            lat: latitude,
            long: longitude,
          });
          updateQueryParams({ distance: distanceToUse });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }, [selectedDistance, debouncedFetchNearbyBranchLocations, updateQueryParams]);

  const handleBranchFormChange = useCallback(
    (field, value) => {
      const newParams = {};
      if (field === "state") {
        setSelectedState(value);
        setSelectedDistrict("");
        setSelectedLocation("");
        fetchDistricts(value);
        newParams.state = value;
        newParams.district = "";
        newParams.location = "";
      } else if (field === "district") {
        setSelectedDistrict(value);
        setSelectedLocation("");
        fetchLocations(selectedState, value);
        newParams.district = value;
        newParams.location = "";
      } else if (field === "location") {
        setSelectedLocation(value);
        newParams.location = value;
      } else if (field === "distance") {
        setSelectedDistance(value);
        newParams.distance = value;
      } else if (field === "clear") {
        setSelectedState("");
        setSelectedDistrict("");
        setSelectedLocation("");
        setSelectedDistance("");
        setUserLocation(null);
        setDistricts([]);
        setLocations([]);
        newParams.state = "";
        newParams.district = "";
        newParams.location = "";
        newParams.distance = "";
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ latitude, longitude });
              try {
                const response = await api.get("/branch/branches/filtered_branches", {
                  params: {
                    distance: 10,
                    lat: latitude,
                    long: longitude,
                  },
                });
                if (response.data.success) {
                  setNearbyBranchLocations(response.data.data || []);
                  setSelectedBranch(response.data.data?.[0] || null);
                  updateQueryParams({ distance: "10" });
                } else {
                  console.error("Failed to fetch nearest branches:", response.data.message);
                  setNearbyBranchLocations([]);
                }
              } catch (error) {
                console.error("Error fetching nearest branches:", error);
                setNearbyBranchLocations([]);
              }
            },
            (error) => {
              console.error("Geolocation error:", error);
              setNearbyBranchLocations([]);
            }
          );
        } else {
          setNearbyBranchLocations([]);
        }
      }

      // Update URL parameters
      updateQueryParams(newParams);

      // Trigger filtered fetch for nearby branches only when filters are explicitly changed
      if (field !== "clear" && (field === "state" || field === "district" || field === "location" || field === "distance")) {
        debouncedFetchNearbyBranchLocations({
          state: field === "state" ? value : selectedState || undefined,
          district: field === "district" ? value : selectedDistrict || undefined,
          location: field === "location" ? value : selectedLocation || undefined,
          distance: field === "distance" ? value : selectedDistance || undefined,
          lat: userLocation?.latitude || undefined,
          long: userLocation?.longitude || undefined,
        });
      }
    },
    [
      selectedState,
      selectedDistrict,
      selectedLocation,
      selectedDistance,
      userLocation,
      fetchDistricts,
      fetchLocations,
      debouncedFetchNearbyBranchLocations,
      updateQueryParams,
    ]
  );

  useEffect(() => {
    if (!isInitialLoad) return;

    const state = searchParams.get("state") || "";
    const district = searchParams.get("district") || "";
    const location = searchParams.get("location") || "";
    const distance = searchParams.get("distance") || "20";

    setSelectedState(state);
    setSelectedDistrict(district);
    setSelectedLocation(location);
    setSelectedDistance(distance);

    fetchStates();
    if (state) fetchDistricts(state);
    if (state && district) fetchLocations(state, district);

    // Fetch all branches for the map
    fetchAllBranchLocations();

    // Fetch nearby branches for the list
    if (state || district || location || distance) {
      debouncedFetchNearbyBranchLocations({
        state: state || undefined,
        district: district || undefined,
        location: location || undefined,
        distance: distance || undefined,
        lat: userLocation?.latitude || undefined,
        long: userLocation?.longitude || undefined,
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          const distanceToUse = distance || "10";
          try {
            const response = await api.get("/branch/branches/filtered_branches", {
              params: {
                distance: distanceToUse,
                lat: latitude,
                long: longitude,
              },
            });
            if (response.data.success) {
              setNearbyBranchLocations(response.data.data || []);
              setSelectedBranch(response.data.data?.[0] || null);
              updateQueryParams({ distance: distanceToUse });
            } else {
              console.error("Failed to fetch nearest branches:", response.data.message);
              setNearbyBranchLocations([]);
            }
          } catch (error) {
            console.error("Error fetching nearest branches:", error);
            setNearbyBranchLocations([]);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setNearbyBranchLocations([]);
        }
      );
    } else {
      console.error("Geolocation not supported");
      setNearbyBranchLocations([]);
    }

    setIsInitialLoad(false);
  }, [
    searchParams,
    fetchStates,
    fetchDistricts,
    fetchLocations,
    userLocation,
    fetchAllBranchLocations,
    debouncedFetchNearbyBranchLocations,
    updateQueryParams,
  ]);

  return (
    <section
      className={`${
        variant === "contact"
          ? "sm:bg-[#e6edf7] rounded-t-[10px] py-[20px_0] sm:py-[20px] lg:py-[30px] 2xl:py-[40px] 3xl:py-[50px] max-sm:shadow-[0_0_150px_0_rgba(0,0,0,0.25)]"
          : ""
      }
      ${variant === "branch" ? "pt-[30px] sm:pt-[40px] pb-[0px] 2xl:pt-[30px] 2xl:pb-[90px] 3xl:pt-[50px] 3xl:pb-[120px]" : ""}
      w-full block`}
    >
      <div>
        <div className="container">
          <div
            className={`flex flex-col lg:flex-row items-start xl:items-start justify-between flex-wrap ${
              variant === "contact" ? "mb-[15px] sm:mb-[20px] lg:mb-[30px]" : "mb-[35px]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-title1 w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-600px)] xl:pr-[40px] 2xl:pr-[60px] 3xl:pr-[80px] [&>span]:text-base2 [&>span]:font-bold"
            >
              {pageContent?.title ? renderHtml(pageContent?.title) : ""}
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
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              selectedLocation={selectedLocation}
              selectedDistance={selectedDistance}
              onValueChange={handleBranchFormChange}
              onOpenChange={handleDistanceOpen}
              isMobile={false}
            />
          </div>
        </motion.div>
      </div>
      <div
        className={`${
          variant === "home"
            ? "sm:pb-[45px] xl:pb-[60px] 2xl:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(255,2,2,0.1)] before:absolute before:bottom-0 before:left-0 before:-z-10 before:pointer-events-none before:rotate-180"
            : ""
        }`}
      >
        <div className="max-w-full container mx-auto">
          <BranchLocationMap
            allBranchLocations={allBranchLocations}
            nearbyBranchLocations={nearbyBranchLocations}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            userLocation={userLocation}
            selectedDistance={selectedDistance}
          />
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import BranchForm from "@/components/common/BranchForm";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import api from "../../../lib/api/axios";
// import { renderHtml } from "@/lib/utils/htmlParser";
// import debounce from "lodash/debounce";

// // Dynamically import BranchLocationMap with SSR disabled
// const BranchLocationMap = dynamic(() => import("@/components/features/home/BranchLocationMap"), {
//   ssr: false,
// });

// export default function BranchLocator({ variant = "default", pageContent }) {
//   const searchParams = useSearchParams();
//   const [allBranchLocations, setAllBranchLocations] = useState([]); // For map
//   const [nearbyBranchLocations, setNearbyBranchLocations] = useState([]); // For list
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedDistance, setSelectedDistance] = useState("20");
//   const [userLocation, setUserLocation] = useState(null);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   console.log("selectedDistance ====>", selectedDistance);
  

//   const fetchStates = useCallback(async () => {
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
//   }, []);

//   const fetchDistricts = useCallback(async (state_id) => {
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
//   }, []);

//   const fetchLocations = useCallback(async (state_id, district_id) => {
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
//   }, []);

//   const fetchAllBranchLocations = useCallback(async () => {
//     try {
//       const { data } = await api.get("/branch/branches");
//       if (data?.success) {
//         setAllBranchLocations(data?.data || []);
//         if (!selectedBranch) {
//           setSelectedBranch(data?.data?.[0] || null);
//         }
//       } else {
//         console.error("Failed to fetch all branch locations:", data?.message);
//       }
//     } catch (error) {
//       console.error("Error fetching all branch locations:", error);
//     }
//   }, [selectedBranch]);

//   const debouncedFetchNearbyBranchLocations = useCallback(
//     debounce(async (queryParams) => {
//       try {
//         const { data } = await api.get("/branch/branches/filtered_branches", { params: queryParams });
//         if (data?.success) {
//           setNearbyBranchLocations(data?.data || []);
//           if (!selectedBranch && data?.data?.length > 0) {
//             setSelectedBranch(data?.data?.[0]);
//           }
//         } else {
//           console.error("Failed to fetch nearby branch locations:", data?.message);
//         }
//       } catch (error) {
//         console.error("Error fetching nearby branch locations:", error);
//       }
//     }, 300),
//     [selectedBranch]
//   );

//   const handleDistanceOpen = useCallback(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude });
//           debouncedFetchNearbyBranchLocations({
//             distance: selectedDistance || 10,
//             lat: latitude,
//             long: longitude,
//           });
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation not supported by this browser.");
//     }
//   }, [selectedDistance, debouncedFetchNearbyBranchLocations]);

//   const handleBranchFormChange = useCallback(
//     (field, value) => {
//       if (field === "state") {
//         setSelectedState(value);
//         setSelectedDistrict("");
//         setSelectedLocation("");
//         fetchDistricts(value);
//       } else if (field === "district") {
//         setSelectedDistrict(value);
//         setSelectedLocation("");
//         fetchLocations(selectedState, value);
//       } else if (field === "location") {
//         setSelectedLocation(value);
//       } else if (field === "distance") {
//         setSelectedDistance(value);
//       } else if (field === "clear") {
//         setSelectedState("");
//         setSelectedDistrict("");
//         setSelectedLocation("");
//         setSelectedDistance("");
//         setUserLocation(null);
//         setDistricts([]);
//         setLocations([]);
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(
//             async (position) => {
//               const { latitude, longitude } = position.coords;
//               setUserLocation({ latitude, longitude });
//               try {
//                 const response = await api.get("/branch/branches/filtered_branches", {
//                   params: {
//                     distance: 10,
//                     lat: latitude,
//                     long: longitude,
//                   },
//                 });
//                 if (response.data.success) {
//                     setNearbyBranchLocations(response.data.data || []);
//                     setSelectedBranch(response.data.data?.[0] || null);
//                 } else {
//                   console.error("Failed to fetch nearest branches:", response.data.message);
//                   setNearbyBranchLocations([]);
//                 }
//               } catch (error) {
//                 console.error("Error fetching nearest branches:", error);
//                 setNearbyBranchLocations([]);
//               }
//             },
//             (error) => {
//               console.error("Geolocation error:", error);
//               setNearbyBranchLocations([]);
//             }
//           );
//         } else {
//           setNearbyBranchLocations([]);
//         }
//       }
//       // Trigger filtered fetch for nearby branches only when filters are explicitly changed
//       if (field !== "clear" && (field === "state" || field === "district" || field === "location" || field === "distance")) {
//         debouncedFetchNearbyBranchLocations({
//           state: field === "state" ? value : selectedState || undefined,
//           district: field === "district" ? value : selectedDistrict || undefined,
//           location: field === "location" ? value : selectedLocation || undefined,
//           distance: field === "distance" ? value : selectedDistance || undefined,
//           lat: userLocation?.latitude || undefined,
//           long: userLocation?.longitude || undefined,
//         });
//       }
//     },
//     [
//       selectedState,
//       selectedDistrict,
//       selectedLocation,
//       selectedDistance,
//       userLocation,
//       fetchDistricts,
//       fetchLocations,
//       debouncedFetchNearbyBranchLocations,
//     ]
//   );

//   useEffect(() => {
//     const state = searchParams.get("state") || "";
//     const district = searchParams.get("district") || "";
//     const location = searchParams.get("location") || "";
//     const distance = searchParams.get("distance") || "20";

//     setSelectedState(state);
//     setSelectedDistrict(district);
//     setSelectedLocation(location);
//     setSelectedDistance(distance);

//     fetchStates();
//     if (state) fetchDistricts(state);
//     if (state && district) fetchLocations(state, district);

//     if (isInitialLoad) {
//       // Fetch all branches for the map
//       fetchAllBranchLocations();

//       // Fetch nearby branches for the list
//       if (state || district || location || distance) {
//         debouncedFetchNearbyBranchLocations({
//           state: state || undefined,
//           district: district || undefined,
//           location: location || undefined,
//           distance: distance || undefined,
//           lat: userLocation?.latitude || undefined,
//           long: userLocation?.longitude || undefined,
//         });
//       } else if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ latitude, longitude });
//             try {
//               const response = await api.get("/branch/branches/filtered_branches", {
//                 params: {
//                   distance: 10,
//                   lat: latitude,
//                   long: longitude,
//                 },
//               });
//               if (response.data.success) {
//                 setNearbyBranchLocations(response.data.data || []);
//                 setSelectedBranch(response.data.data?.[0] || null);
//               } else {
//                 console.error("Failed to fetch nearest branches:", response.data.message);
//                 setNearbyBranchLocations([]);
//               }
//             } catch (error) {
//               console.error("Error fetching nearest branches:", error);
//               setNearbyBranchLocations([]);
//             }
//           },
//           (error) => {
//             console.error("Geolocation error:", error);
//             setNearbyBranchLocations([]);
//           }
//         );
//       } else {
//         console.error("Geolocation not supported");
//         setNearbyBranchLocations([]);
//       }
//     }

//     setIsInitialLoad(false);
//   }, [
//     searchParams,
//     isInitialLoad,
//     fetchStates,
//     fetchDistricts,
//     fetchLocations,
//     userLocation,
//     fetchAllBranchLocations,
//     debouncedFetchNearbyBranchLocations,
//   ]);

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
//       >
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
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="container mx-auto"
//         >
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
//           <BranchLocationMap
//             allBranchLocations={allBranchLocations}
//             nearbyBranchLocations={nearbyBranchLocations}
//             selectedBranch={selectedBranch}
//             setSelectedBranch={setSelectedBranch}
//             userLocation={userLocation}
//             selectedDistance={selectedDistance}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
