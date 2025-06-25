import LatestBlogs from "@/pages/LatestBlogs";
import AllBlogsPage from "@/pages/AllBlogs";
import { Suspense } from "react";

export default async function Blog({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  return (
    <>
      <LatestBlogs />
      <Suspense fallback={<div>Loading...</div>}>
        <AllBlogsPage page={page} />
      </Suspense>
    </>
  );
}
