import IndelValueBanner from "@/components/features/about/IndelValueBanner";
import MobIndelValueBanner from "@/components/features/about/MobIndelValueBanner";
import OurValues from "@/components/features/about/OurValues";
import OurApproach from "@/components/features/about/OurApproach";

export default function IndelValues() {
  return (
    <>
      <div className="hidden sm:block">
        <IndelValueBanner />
      </div>
      <div className="block sm:hidden">
        <MobIndelValueBanner />
      </div>

      {/* ManagementTeam contents */}
      <OurValues />

      {/* OurApproach contents */}
      <OurApproach />
    </>
  );
}
