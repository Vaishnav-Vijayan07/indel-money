import IndelHistory from "../../components/features/history/IndelHistory";
import YearsInception from "../../components/features/history/YearsInception";
import MobYearsInception from "../../components/features/history/MobYearsInception";

async function fetchHistoryData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/history`, {
      // cache: "no-store", // Ensure fresh data
      cache: "no-store",
      //next: { revalidate: 600 },
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

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=history`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "History Of Indel | My Website",
        description: meta?.meta_description || "Explore the rich history of Indel Money, our journey, and milestones.",
        keywords: meta?.meta_keywords || "indel money, history, milestones, journey",
        error: null,
      };
    }
    return {
      title: "History Of Indel | My Website",
      description: "Explore the rich history of Indel Money, our journey, and milestones.",
      keywords: "indel money, history, milestones, journey",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "History Of Indel | My Website",
      description: "Explore the rich history of Indel Money, our journey, and milestones.",
      keywords: "indel money, history, milestones, journey",
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

export default async function History() {
  const { contents, images, inceptions, error } = await fetchHistoryData();

  if (!contents || !images || !inceptions) {
    return <div>Failed to fetch history data</div>;
  }

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
        <MobYearsInception inceptionslides={inceptions} title={contents?.inception_title} years={contents?.inception_count} />
      </div>
    </>
  );
}
