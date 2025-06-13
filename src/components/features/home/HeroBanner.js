import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import api from "@/lib/api/axios";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";

export default function HeroBanner({ heroBanner, initialData }) {
  const [goldLiveRate, setGoldLiveRate] = useState("0");

  const fetchGoldRateLive = async () => {
    try {
      const { data } = await api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/gold-live-rate`);
      throw new Error("Failed to fetch gold live rate!"); // Simulating an error for testing purposes
      if (data.success) {
        setGoldLiveRate(data?.data?.LTV);
      } else {
        toast.error("Failed to fetch gold carat types!");
        const min = 6000;
        const max = 8000;
        const rand = min + Math.random() * (max - min);
        setGoldLiveRate(rand.toFixed(0));
      }
    } catch (error) {
      toast.error("Gold carat fetching failed!");
        const min = 6000;
        const max = 8000;
        const rand = min + Math.random() * (max - min);
        setGoldLiveRate(rand.toFixed(0));
    }
  };

  useEffect(() => {
    fetchGoldRateLive();
  }, [])

  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <HomeSlider heroBanner={heroBanner} />
      <HomeMarquee
        announcementText={initialData?.pageContent?.announcement_text}
        goldRateLabel={initialData?.pageContent?.gold_rate_label}
        goldRateIcon={initialData?.pageContent?.gold_rate_icon}
        goldRate={goldLiveRate}
      />
      <HeroBannerEnquiry />
    </section>
  );
}
