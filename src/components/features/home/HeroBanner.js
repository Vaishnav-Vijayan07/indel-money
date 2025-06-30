import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import { useEffect, useState } from "react";

export default function HeroBanner({ heroBanner, initialData, announcement }) {
  const [goldLiveRate, setGoldLiveRate] = useState("0");

  useEffect(() => {
    // Simulate fetching a fake gold rate
    const min = 6000;
    const max = 8000;
    const rand = min + Math.random() * (max - min);
    setGoldLiveRate(rand.toFixed(0));
  }, []);

  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <HomeSlider heroBanner={heroBanner} />
      <HomeMarquee
        announcementText={announcement}
        goldRateLabel={initialData?.pageContent?.gold_rate_label}
        goldRateIcon={initialData?.pageContent?.gold_rate_icon}
        goldRate={goldLiveRate}
      />
      <HeroBannerEnquiry />
    </section>
  );
}
