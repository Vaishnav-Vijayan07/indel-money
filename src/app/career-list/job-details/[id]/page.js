//export const dynamic = "force-dynamic";
// import CareerDetailInfo from "@/components/features/career/CareerDetailInfo";
import CareerDetailInfo from "../../../../components/features/career/CareerDetailInfo";
import api from "@/lib/api/axios";
import { decodeId } from "@/lib/hashids";

export default async function CareerDetail({ params }) {
  const { id } = await params;

  const DecodeId = decodeId(id);

  let job = null;
  let error = null;

  try {
    const response = await api.get(`/career/jobs/${DecodeId}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
      timeout: 5000,
    });
    if (!response.data.success) {
      error = response.data.message || "Failed to fetch job details";
    } else {
      job = response.data.data || null;
    }
  } catch (err) {
    error = err.response?.data?.message || "Failed to fetch job details";
  }

  if (error || !job) {
    return <div className="container py-8 text-center text-red-500">Error: {error || "Job not found"}</div>;
  }

  return <CareerDetailInfo job={job} />;
}

// import CareerDetailInfo from "@/components/features/career/CareerDetailInfo";

// export default async function CareerDetail({ params }) {
//   const { id } = await params;

//   return <CareerDetailInfo />;
// }
