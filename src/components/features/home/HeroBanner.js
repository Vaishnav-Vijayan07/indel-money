import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";

export default function HeroBanner() {

  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <HomeSlider />
      <HomeMarquee />
      <HeroBannerEnquiry />
    </section>
  );
}
