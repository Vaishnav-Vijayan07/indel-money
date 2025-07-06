import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function HeroBanner({ heroBanner, initialData, announcement }) {
  const [goldLiveRate, setGoldLiveRate] = useState("0");

  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await fetch("http://insight.indelmoney.com:8089/indel/api/insight/latestLTV", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Api_key: "ed8d7baf6b5bc3be44ea3fcd65482541a6770d8d",
          },
          body: JSON.stringify({}),
        });

        const data = await response.json();

        if (data?.status && data?.LTV) {
          setGoldLiveRate(parseFloat(data.LTV));
        } else {
          toast.error("Failed to fetch gold rate");
        }
      } catch (error) {
        toast.error("Error fetching gold rate");
        console.error("LTV API error:", error);
      }
    };

    fetchGoldRate();
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
