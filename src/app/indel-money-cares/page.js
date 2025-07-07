//export const dynamic = "force-dynamic";
import IndelCares from "@/pages/IndelCares";

async function fetchData(page = 1, limit = 3) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/indel-cares?page=${page}&limit=${limit}`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response?.json();
    const data = result?.data;
    const pagination = result?.data?.pagination;

    if (result.status === "success") {
      return {
        content: data?.content,
        slideItems: data?.slideItems,
        nonSlideItems: data?.nonSlideItems,
        totalPages: pagination?.totalPages,
        currentPage: pagination?.currentPage,
        limit: pagination?.limit,
        error: null,
      };
    }
    return {
      content: null,
      slideItems: null,
      nonSlideItems: null,
      totalPages: null,
      currentPage: null,
      limit: null,
      error: result.message,
    };
  } catch (error) {
    return {
      content: null,
      slideItems: null,
      nonSlideItems: null,
      totalPages: null,
      currentPage: null,
      limit: null,
      error: "Failed to fetch indel data",
    };
  }
}

export default async function Partners({ searchParams }) {
  const { page } = (await searchParams) || 1;
  const { content, slideItems, nonSlideItems, totalPages, currentPage, limit, error } = await fetchData(page);

  if (!content && !slideItems && !nonSlideItems) {
    return <div>Failed to fetch indel data</div>;
  }

  return (
    <IndelCares
      content={content}
      slideItems={slideItems}
      nonSlideItems={nonSlideItems}
      totalPages={totalPages}
      currentPage={currentPage}
      limit={limit}
    />
  );
}
