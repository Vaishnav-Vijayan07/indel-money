import BlogDetail from "@/components/features/blog/BlogDetail";
import RecentBlog from "@/components/features/blog/RecentBlog";

async function fetchBlogData(slug) {
  try {
    const response = await fetch(`http://localhost:7700/api/web/blogs/${slug}`);
    const result = await response.json();
    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to fetch blog data" };
  }
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const { data, error } = await fetchBlogData(slug);

  return (
    <>
      <BlogDetail data={data} />
      <RecentBlog />
    </>
  );
}
