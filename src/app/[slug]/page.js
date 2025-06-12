import PrivacyPolicy from "@/components/features/privacy/PrivacyPolicy";

async function fetchData(type) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/policies?type=${type}`, {
      cache: "no-store", // Ensure fresh data
    });

    const result = await response.json();
    const PolicyData = result.policy;

    if (result.status === "success") {
      return {
        content: PolicyData?.content,
        error: null,
      };
    }
    s;

    return {
      content: null,
      error: result.message,
    };
  } catch (error) {
    return {
      content: null,
      error: "Failed to policy data",
    };
  }
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const { content, error } = await fetchData(slug);

  // Handle error state
  if (error) {
    return (
      <div className="container py-10">
        <h1>Error Loading Policy</h1>
      </div>
    );
  }

  return (
    <>
      <PrivacyPolicy content={content} type={slug} />
    </>
  );
}
