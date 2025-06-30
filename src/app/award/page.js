import AwardClient from "@/pages/AwardClient";
import NoContents from "@/components/NoContents";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/awards`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const awardsData = result.data

    if (result.status === "success") {
      return { contents: awardsData?.awardPageContent, awards: awardsData?.nonSlideItems, sliderItems: awardsData?.slideItems, error: null };
    }
    return { contents: null, awards: null, sliderItems: null, error: result.message };
  } catch (error) {
    return { contents: null, awards: null, sliderItems: null, error: "Failed to fetch history data" };
  }
}




export default async function Award() {
  
  const { contents, awards, sliderItems, error } = await fetchData();

  
  

  if (!contents ) {
    return <NoContents />;
  }

  return (
    <AwardClient contents={contents} awards={awards} sliderItems={sliderItems} error={error} />
  )
}
