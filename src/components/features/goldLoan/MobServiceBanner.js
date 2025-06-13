'use client';
import PageBreadcrumb from "../../common/PageBreadcrumb";
import Image from "next/image";
import MobHomeMarquee from "../home/MobHomeMarquee";
import { useState } from "react";

const getRandomGoldRate = () => {
  const min = 7000;
  const max = 8000;
  const rand = min + Math.random() * (max - min);
  return rand.toFixed(0);
};

export default function MobServiceBanner(bannerIcons, title, announcement_text, gold_rate_text) {
    const [goldLiveRate, setGoldLiveRate] = useState(getRandomGoldRate());
  return (
    <section className="w-full h-[468px] 4xs:h-[576px] block relative z-0 overflow-hidden before:content-[''] before:absolute before:w-full before:h-[30%] before:bottom-[var(--marquee-y)] before:left-0 before:-z-1 before:bg-linear-to-t before:from-black before:to-transparent">
      <Image
        src="/images/goldloanBanner.webp"
        alt="value-innerBanner"
        fill
        sizes="100vw"
        className="-z-2 object-cover pointer-events-none"
      />
      <MobHomeMarquee announcementText={announcement_text} goldRateLabel={gold_rate_text} goldRate={goldLiveRate} />
    </section>
  );
}
