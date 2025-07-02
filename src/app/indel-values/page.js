import IndelValueBanner from "@/components/features/about/IndelValueBanner";
import MobIndelValueBanner from "@/components/features/about/MobIndelValueBanner";
import OurValues from "@/components/features/about/OurValues";
import OurApproach from "@/components/features/about/OurApproach";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/indel-values`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const indelValues = result.data;

    if (result.status === "success") {
      return {
        contents: indelValues?.indelValueContent,
        values: indelValues?.indelValues,
        propositions: indelValues?.approachPropositions,
        error: null,
      };
    }
    return { contents: null, values: null, propositions: null, error: result.message };
  } catch (error) {
    return { contents: null, values: null, propositions: null, error: "Failed to fetch history data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=indelValues`, {
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Indel Values | My Website",
        description: meta?.meta_description || "Explore the core values of indel money, its history, milestones, and journey.",
        keywords: meta?.meta_keywords || "indel, money, values, history, milestones",
        error: null,
      };
    }
    return {
      title: "Indel Values | My Website",
      description: "Explore the core values of indel money, its history, milestones, and journey.",
      keywords: "indel, money, values, history, milestones",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Indel Values | My Website",
      description: "Explore the core values of indel money, its history, milestones, and journey.",
      keywords: "indel, money, values, history, milestones",
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

export default async function IndelValues() {
  const { contents, values, propositions, error } = await fetchData();

  if (!contents || !values || !propositions) {
    return <div>Failed to fetch Indel Values data</div>;
  }

  return (
    <>
      <div className="hidden sm:block">
        <IndelValueBanner image={contents?.banner_image} alt={contents?.image_alt} title={contents?.page_title} />
      </div>
      <div className="block sm:hidden">
        <MobIndelValueBanner />
      </div>

      {/* ManagementTeam contents */}
      <OurValues values={values} />

      {/* OurApproach contents */}
      <OurApproach propositions={propositions} title={contents?.approach_title} />
    </>
  );
}
