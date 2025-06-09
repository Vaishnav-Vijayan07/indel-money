import Testimonial from "@/pages/Testimonials";

async function fetchData(page = 1, limit = 2, type = "all") {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/testimonials?page=${page}&limit=${limit}&type=${type}`, {
      cache: "no-store", // Ensure fresh data
    });

    const result = await response.json();

    if (result.status === "success") {
      return {
        contents: result.data?.content,
        testimonials: result.data?.testimonials,
        pagination: result.data?.pagination,
        error: null, // ← Fixed: should be null on success
      };
    }

    return {
      contents: null,
      testimonials: null,
      pagination: null,
      error: result.message || "Failed to fetch ombudsman data",
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      contents: null,
      testimonials: null,
      pagination: null,
      error: "Failed to fetch ombudsman data",
    };
  }
}

export default async function EmployeeTestimonial({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  const type = (await searchParams?.type) || "all";

  const { testimonials, pagination, contents, error } = await fetchData(page, 2, type);

  if (error) {
    return <div>{error}</div>;
  }

  return <Testimonial testimonials={testimonials} pagination={pagination} contents={contents} />;
}
