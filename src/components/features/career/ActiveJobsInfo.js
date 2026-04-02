"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import FindJobForm from "./FindJobForm";
import JobResultBox from "./JobResultBox";
import MobJobResultBox from "./MobJobResultBox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import LoadingCircleSpinner from "@/components/common/LoadingCircleSpinner";
import api from "@/lib/api/axios";
import Link from "next/link";

export default function ActiveJobsInfo() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10, // Changed from per_page to limit and set to 10 to match API
    totalItems: 0,
    totalPages: 1,
  });

  const fetchJobs = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      // Update query parameters to use 'limit' instead of 'per_page'
      const queryParams = { ...params, limit: pagination.limit };
      const query = new URLSearchParams(queryParams).toString();
      // Update API endpoint to match cURL command
      const response = await api.get(`/career/jobs/filtered?${query}`, { timeout: 5000 });
      if (!response.data.success) {
        setError(response.data.message || "Failed to fetch jobs");
        setJobs([]);
        setPagination({ currentPage: 1, limit: 10, totalItems: 0, totalPages: 1 });
      } else {
        const allJobs = response.data.data || [];
        // Validate job objects
        const validJobs = allJobs.filter(
          (job) =>
            job &&
            typeof job === "object" &&
            job.id &&
            (job.role == null || typeof job.role === "object") &&
            (job.location == null || typeof job.location === "object") &&
            (job.state == null || typeof job.state === "object"),
        );
        setJobs(validJobs);
        setPagination(response.data.pagination);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch jobs");
      setJobs([]);
      setPagination({ currentPage: 1, limit: 10, totalItems: 0, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = {
      state_id: searchParams.get("state_id") || "",
      district_id: searchParams.get("district_id") || "",
      location_id: searchParams.get("location_id") || "",
      role_id: searchParams.get("role_id") || "",
      page: searchParams.get("page") || "1",
    };
    fetchJobs(params);
  }, [searchParams]);

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/career-list?${params.toString()}`);
  };

  const handleClearFilters = () => {
    router.push("/career-list");
  };

  const hasActiveFilters = () => {
    return searchParams.get("state_id") || searchParams.get("district_id") || searchParams.get("location_id") || searchParams.get("role_id");
  };

  const renderPaginationItems = () => {
    const { currentPage, totalPages } = pagination;
    const items = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      items.push(
        <PaginationItem key="start">
          <PaginationLink href="#" onClick={() => handlePageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
      items.push(
        <PaginationItem key="end">
          <PaginationLink href="#" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <section className="w-full block pb-[30px] lg:pb-[40px] 2xl:pb-[50px]">
      <div className="container">
        <div className="w-full h-auto block mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
          <FindJobForm variant="activeJobs" handleClearFilters={handleClearFilters} hasActiveFilters={hasActiveFilters} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingCircleSpinner />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4">Error: {error}</div>
        ) : (
          <>
            {jobs.length > 0 ? (
              <div className="flex flex-wrap -mx-[4px] sm:-mx-[15px] lg:-mx-[20px] 2xl:-mx-[25px]">
                {jobs?.map((item) => (
                  <div key={item.id} className="w-full lg:w-1/2 p-[4px] sm:p-[5px_10px] lg:p-[10px_15px] 2xl:p-[15px_20px] 3xl:p-[20px_25px]">
                    <div className="hidden sm:block">
                      <JobResultBox variant="activeJobs" item={item} />
                    </div>
                    <div className="block sm:hidden">
                      <MobJobResultBox item={item} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full text-center text-gray-500 p-4">
                  We would be marking our presence in your location soon. Please drop your resume so that we can call when we are there.
                </div>
                <Link
                  href={"/career/#makemove"}
                  className="btn btn-base2 max-w-full sm:max-w-xs lg:min-w-[160px] xl:max-w-[195px] 3xl:min-w-[220px] hover:bg-[#cf2613]"
                >
                  Back to careers
                </Link>
              </div>
            )}
            {pagination.totalPages > 1 && (
              <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => handlePageChange(Math.max(1, pagination.currentPage - 1))}
                      className={pagination.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {renderPaginationItems()}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => handlePageChange(Math.min(pagination.totalPages, pagination.currentPage + 1))}
                      className={pagination.currentPage === pagination.totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import FindJobForm from "./FindJobForm";
// import JobResultBox from "./JobResultBox";
// import MobJobResultBox from "./MobJobResultBox";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import LoadingCircleSpinner from "@/components/common/LoadingCircleSpinner";
// import api from "@/lib/api/axios";
// import Link from "next/link";

// export default function ActiveJobsInfo() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     per_page: 6,
//     totalItems: 0,
//     totalPages: 1,
//   });

//   const fetchJobs = async (params = {}) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const query = new URLSearchParams(params).toString();
//       const response = await api.get(`/career/jobs/filtered?${query}`, { timeout: 5000 });
//       if (!response.data.success) {
//         setError(response.data.message || "Failed to fetch jobs");
//         setJobs([]);
//         setPagination({ currentPage: 1, per_page: 6, totalItems: 0, totalPages: 1 });
//       } else {
//         const allJobs = response.data.data || [];
//         // Validate job objects
//         const validJobs = allJobs.filter(
//           (job) =>
//             job &&
//             typeof job === "object" &&
//             job.id &&
//             (job.role == null || typeof job.role === "object") &&
//             (job.location == null || typeof job.location === "object") &&
//             (job.state == null || typeof job.state === "object")
//         );
//         const page = parseInt(params.page) || 1;
//         const perPage = pagination.per_page;
//         const start = (page - 1) * perPage;
//         const end = start + perPage;
//         const paginatedJobs = validJobs.slice(start, end);
//         setJobs(paginatedJobs);
//         setPagination({
//           currentPage: page,
//           per_page: perPage,
//           totalItems: validJobs.length,
//           totalPages: Math.ceil(validJobs.length / perPage) || 1,
//         });
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch jobs");
//       setJobs([]);
//       setPagination({ currentPage: 1, per_page: 6, totalItems: 0, totalPages: 1 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const params = {
//       state_id: searchParams.get("state_id") || "",
//       district_id: searchParams.get("district_id") || "",
//       location_id: searchParams.get("location_id") || "",
//       role_id: searchParams.get("role_id") || "",
//       page: searchParams.get("page") || "1",
//     };
//     fetchJobs(params);
//   }, [searchParams]);

//   const handlePageChange = (page) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("page", page.toString());
//     router.push(`/career-list?${params.toString()}`);
//   };

//   const handleClearFilters = () => {
//     router.push("/career-list");
//   };

//   const hasActiveFilters = () => {
//     return (
//       searchParams.get("state_id") ||
//       searchParams.get("district_id") ||
//       searchParams.get("location_id") ||
//       searchParams.get("role_id")
//     );
//   };

//   const renderPaginationItems = () => {
//     const { currentPage, totalPages } = pagination;
//     const items = [];
//     const maxVisiblePages = 3;

//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     if (endPage - startPage + 1 < maxVisiblePages) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     if (startPage > 1) {
//       items.push(
//         <PaginationItem key="start">
//           <PaginationLink href="#" onClick={() => handlePageChange(1)}>
//             1
//           </PaginationLink>
//         </PaginationItem>
//       );
//       if (startPage > 2) {
//         items.push(
//           <PaginationItem key="start-ellipsis">
//             <PaginationEllipsis />
//           </PaginationItem>
//         );
//       }
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       items.push(
//         <PaginationItem key={i}>
//           <PaginationLink href="#" isActive={i === currentPage} onClick={() => handlePageChange(i)}>
//             {i}
//           </PaginationLink>
//         </PaginationItem>
//       );
//     }

//     if (endPage < totalPages) {
//       if (endPage < totalPages - 1) {
//         items.push(
//           <PaginationItem key="end-ellipsis">
//             <PaginationEllipsis />
//           </PaginationItem>
//         );
//       }
//       items.push(
//         <PaginationItem key="end">
//           <PaginationLink href="#" onClick={() => handlePageChange(totalPages)}>
//             {totalPages}
//           </PaginationLink>
//         </PaginationItem>
//       );
//     }

//     return items;
//   };

//   return (
//     <section className="w-full block pb-[30px] lg:pb-[40px] 2xl:pb-[50px]">
//       <div className="container">
//         <div className="w-full h-auto block mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
//           <FindJobForm variant="activeJobs" handleClearFilters={handleClearFilters} hasActiveFilters={hasActiveFilters} />
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center">
//             <LoadingCircleSpinner />
//           </div>
//         ) : error ? (
//           <div className="text-red-500 text-center p-4">Error: {error}</div>
//         ) : (
//           <>
//             {jobs.length > 0 ? (
//               <div className="flex flex-wrap -mx-[4px] sm:-mx-[15px] lg:-mx-[20px] 2xl:-mx-[25px]">
//                 {jobs?.map((item) => (
//                   <div
//                     key={item.id}
//                     className="w-full lg:w-1/2 p-[4px] sm:p-[5px_10px] lg:p-[10px_15px] 2xl:p-[15px_20px] 3xl:p-[20px_25px]"
//                   >
//                     <div className="hidden sm:block">
//                       <JobResultBox variant="activeJobs" item={item} />
//                     </div>
//                     <div className="block sm:hidden">
//                       <MobJobResultBox item={item} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center">
//                 <div className="w-full text-center text-gray-500 p-4">
//                   We would be marking our presence in your location soon. Please drop your resume so that we can call when we are
//                   there.
//                 </div>
//                 <Link
//                   href={"/career/#makemove"}
//                   className="btn btn-base2 max-w-full sm:max-w-xs lg:min-w-[160px] xl:max-w-[195px] 3xl:min-w-[220px]  hover:bg-[#cf2613]"
//                 >
//                   Back to careers
//                 </Link>
//               </div>
//             )}
//             {pagination.totalPages > 1 && (
//               <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
//                 <PaginationContent>
//                   <PaginationItem>
//                     <PaginationPrevious
//                       href="#"
//                       onClick={() => handlePageChange(Math.max(1, pagination.currentPage - 1))}
//                       className={pagination.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
//                     />
//                   </PaginationItem>
//                   {renderPaginationItems()}
//                   <PaginationItem>
//                     <PaginationNext
//                       href="#"
//                       onClick={() => handlePageChange(Math.min(pagination.totalPages, pagination.currentPage + 1))}
//                       className={pagination.currentPage === pagination.totalPages ? "pointer-events-none opacity-50" : ""}
//                     />
//                   </PaginationItem>
//                 </PaginationContent>
//               </Pagination>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// }
