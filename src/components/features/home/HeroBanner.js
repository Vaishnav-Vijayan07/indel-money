import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import api from "@/lib/api/axios";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";

export default function HeroBanner({ heroBanner, initialData }) {
  const API_KEY_GOLD_RATE = "ed8d7baf6b5bc3be44ea3fcd65482541a6770d8d";
  const [goldLiveRate, setGoldLiveRate] = useState(0);

  const fetchGoldRateLive = async () => {
    try {
      const { data } = await api.post(
        "http://insight.indelmoney.com:8089/indel/api/insight/latestLTV",
        {},
        {
          headers: {
            Api_key: API_KEY_GOLD_RATE
          }
        }
      );

      if (data.status) {
        setGoldLiveRate(data.LTV);
      } else {
        toast.error("Failed to fetch gold carat types!");
      }
    } catch (error) {
      toast.error("Gold carat fetching failed!");
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
