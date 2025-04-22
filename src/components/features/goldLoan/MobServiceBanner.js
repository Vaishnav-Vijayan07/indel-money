import PageBreadcrumb from "../../common/PageBreadcrumb";
import Image from "next/image";
import MobHomeMarquee from "../home/MobHomeMarquee";

const goldItems = [
  { icon: "/images/goldIcon4.svg", title: "Medical emergencies" },
  { icon: "/images/goldIcon1.svg", title: "Business start-ups and expansions" },
  { icon: "/images/goldIcon3.svg", title: "Educational loan" },
  { icon: "/images/goldIcon2.svg", title: "Medical emergencies" },
];

function ServiceBannerItem({ item }) {
  return (
    <div className="w-full h-auto flex flex-wrap items-center">
      <div className="w-[45px] 2xl:w-[55px] 3xl:w-[66px] aspect-square rounded-full flex items-center justify-center bg-[linear-gradient(156deg,#17479E_6%,#C63B3B_91%)]">
        <Image
          src={item.icon}
          alt={item.title}
          width={30}
          height={30}
          className="w-full h-full max-w-[15px] xl:max-w-[20px] 3xl:max-w-[30px] object-contain"
        />
      </div>
      <div className="w-[calc(100%-45px)] xl:w-[calc(100%-55px)] 3xl:w-[calc(100%-66px)] pl-[10px] 4xs:pl-[20px] text-[13px] 2xl:text-[16px] 3xl:text-[18px] font-medium leading-[1.2] text-white">
        {item.title}
      </div>
    </div>
  );
}

export default function MobServiceBanner() {
  return (
    <section className="w-full h-[468px] 4xs:h-[576px] block relative z-0 overflow-hidden before:content-[''] before:absolute before:w-full before:h-[30%] before:bottom-[var(--marquee-y)] before:left-0 before:-z-1 before:bg-linear-to-t before:from-black before:to-transparent">
      <Image
        src="/images/goldloanBanner.webp"
        alt="value-innerBanner"
        fill
        sizes="100vw"
        className="-z-2 object-cover pointer-events-none"
      />
      <MobHomeMarquee />
    </section>
  );
}
