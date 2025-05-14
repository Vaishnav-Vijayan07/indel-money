import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";

export default function HeroBanner({ heroBanner, initialData }) {
  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <HomeSlider heroBanner={heroBanner} />
      <HomeMarquee
        announcementText={initialData?.pageContent?.announcement_text}
        goldRateLabel={initialData?.pageContent?.gold_rate_label}
        goldRateIcon={initialData?.pageContent?.gold_rate_icon}
      />
      <HeroBannerEnquiry />
    </section>
  );
}
