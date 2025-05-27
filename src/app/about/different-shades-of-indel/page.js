import DifferentShadesIndelBanner from "@/components/features/about/DifferentShadesIndelBanner";
import DifferentShadesIndelSlide from "@/components/features/about/DifferentShadesIndelSlide";

import MobDifferentShadesIndelSlide from "@/components/features/about/MobDifferentShadesIndelSlide";

export default function DifferentShadesIndel() {
  return (
    <>
      <DifferentShadesIndelBanner />

      <div className="hidden sm:block">
        <DifferentShadesIndelSlide />
      </div>
      <div className="block sm:hidden">
        <MobDifferentShadesIndelSlide />
      </div>
    </>
  );
}
