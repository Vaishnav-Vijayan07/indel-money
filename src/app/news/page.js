import LatestNews from "@/pages/LatestNews";
import AllNewsPage from "@/pages/AllNews";

export default async function News({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  return (
    <>
      <LatestNews />
      <AllNewsPage  page={page}/>
    </>
  );
}
