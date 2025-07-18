import Image from "next/image";
import MobHomeMarquee from "../home/MobHomeMarquee";

export default function MobServiceBanner({ bannerIcons, title, announcement_text, gold_rate_text, banner_image, alt, goldRate }) {
  return (
    <section className="w-full h-[468px] 4xs:h-[576px] block relative z-0 overflow-hidden before:content-[''] before:absolute before:w-full before:h-[30%] before:bottom-[var(--marquee-y)] before:left-0 before:-z-1 before:bg-linear-to-t before:from-black before:to-transparent">
      <Image
        src={banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${banner_image}` : "/images/goldloanBanner.webp"}
        alt={alt || "value-innerBanner"}
        fill
        sizes="100vw"
        className="-z-2 object-cover pointer-events-none"
      />
      <MobHomeMarquee announcementText={announcement_text} goldRateLabel={gold_rate_text} goldRate={goldRate} />
    </section>
  );
}
