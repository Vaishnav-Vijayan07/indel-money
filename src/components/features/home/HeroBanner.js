import HomeSlider from "../../features/home/HomeSlider";
import HomeMarquee from "../../features/home/HomeMarquee";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import api from "../../../lib/api/axios";

export default function HeroBanner({ heroBanner, initialData, announcement, goldRate }) {
  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <HomeSlider heroBanner={heroBanner} />
      <HomeMarquee
        announcementText={announcement}
        goldRateLabel={initialData?.pageContent?.gold_rate_label}
        goldRateIcon={initialData?.pageContent?.gold_rate_icon}
        goldRate={goldRate}
      />
      <HeroBannerEnquiry />
    </section>
  );
}
