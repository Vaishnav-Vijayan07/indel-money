import IndelValueBanner from "@/components/features/about/IndelValueBanner";
import MobIndelValueBanner from "@/components/features/about/MobIndelValueBanner";
import OurValues from "@/components/features/about/OurValues";
import OurApproach from "@/components/features/about/OurApproach";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/indel-values`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const indelValues = result.data

    if (result.status === "success") {
      return { contents: indelValues?.indelValueContent, values: indelValues?.indelValues, propositions: indelValues?.approachPropositions, error: null };
    }
    return { contents: null, values: null, propositions: null, error: result.message };
  } catch (error) {
    return { contents: null, values: null, propositions: null, error: "Failed to fetch history data" };
  }
}

export default async function IndelValues() {

  const { contents, values, propositions, error } = await fetchData();

  if (!contents || !values || !propositions) {
    return <div>Failed to fetch Indel Values data</div>;
  }

  return (
    <>
      <div className="hidden sm:block">
        <IndelValueBanner image={contents?.image} title={contents?.page_title} />
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
