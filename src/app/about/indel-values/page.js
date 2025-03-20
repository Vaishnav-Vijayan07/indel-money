import OurValueBanner from "@/components/features/about/OurValueBanner";
import OurValues from "@/components/features/about/OurValues";
import OurApproach from "@/components/features/about/OurApproach";

export default function IndelValues() {
  return (
    <>
      {/* InnerBanner contents */}
      <OurValueBanner />

      {/* ManagementTeam contents */}
      <OurValues />

      {/* OurApproach contents */}
      <OurApproach />
    </>
  );
}
