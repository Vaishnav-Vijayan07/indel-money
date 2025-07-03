import Testimonial from "@/pages/Testimonials";

async function fetchData(page = 1, limit = 10, type = "all") {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/testimonials?page=${page}&limit=${limit}&type=${type}`,
      {
        // cache: "no-store", // Ensure fresh data
        cache: "no-store",
        //next: { revalidate: 600 },
      }
    );

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

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=testimonials`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Employee Testimonials | My Website",
        description: meta?.meta_description || "Read employee testimonials about our services.",
        keywords: meta?.meta_keywords || "employee testimonials, feedback, reviews",
        error: null,
      };
    }
    return {
      title: "Employee Testimonials | My Website",
      description: "Read employee testimonials about our services.",
      keywords: "employee testimonials, feedback, reviews",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Employee Testimonials | My Website",
      description: "Read employee testimonials about our services.",
      keywords: "employee testimonials, feedback, reviews",
      error: "Failed to fetch service data",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords } = await getMetaData();

  return {
    title,
    description,
    keywords,
  };
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
