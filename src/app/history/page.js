import IndelHistory from "../../components/features/history/IndelHistory";
import YearsInception from "../../components/features/history/YearsInception";
import MobYearsInception from "../../components/features/history/MobYearsInception";

async function fetchHistoryData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/history", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { contents: result.data?.content, images: result.data?.images, inceptions: result.data?.inceptions, error: null };
    }
    return { contents: null, images: null, inceptions: null, error: result.message };
  } catch (error) {
    return { contents: null, images: null, inceptions: null, error: "Failed to fetch history data" };
  }
}

export default async function History() {
  const { contents, images, inceptions, error } = await fetchHistoryData();

  console.log(inceptions)

  return (
    <>
      <IndelHistory
        historyImages={images}
        pageTitle={contents?.page_title}
        historyDesc={contents?.history_description}
        historyTitle={contents?.history_title}
      />

      {/* Yearsinception section */}
      <div className="hidden sm:block">
        <YearsInception inceptionslides={inceptions} title={contents?.inception_title} />
      </div>
      <div className="block sm:hidden">
        <MobYearsInception />
      </div>
    </>
  );
}
