import { serverMediaPath } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { renderHtml } from "@/lib/utils/htmlParser";

const offeringListing = [
  {
    id: "offr-01",
    image: "/images/offr-01.svg",
    alt: "Capital expenses icon",
    description: "For CAPEX / working capital expenses",
  },
  {
    id: "offr-02",
    image: "/images/offr-02.svg",
    alt: "Renovation icon",
    description: "Renovation / extension of house / shop",
  },
  {
    id: "offr-03",
    image: "/images/offr-03.svg",
    alt: "Balance transfer icon",
    description: "Balance transfer from other NBFCs to reduce interest / EMI burden",
  },
  {
    id: "offr-04",
    image: "/images/offr-04.svg",
    alt: "Renovation icon",
    description: "Renovation / extension of house / shop",
  },
  {
    id: "offr-05",
    image: "/images/offr-05.svg",
    alt: "Business expansion icon",
    description: "Business expansion",
  },
];

export default function MobKickStartVenture({ title, sub_title, button_text, button_url, our_offering_title, offerings }) {
  
  return (
    <section className="w-full block py-[20px]">
      <div className="container">
        <div className="w-full relative before:content-[''] before:hidden lg:before:block before:absolute before:h-full before:w-[1px] before:top-0 before:right-0 before:bg-[rgba(22,69,156,0.26)] before:opacity-25">
          <h2 className="text-title1 font-medium mb-[15px] [&>span]:text-base2 [&>span]:font-bold">
            {title ? renderHtml(title) : "Kickstart your new venture with our MSME loan"}
          </h2>
          <div className="text-[14px] leading-normal font-medium text-[#1e1e1e] mb-[15px]">
            {sub_title ? sub_title : "Empowering MSMEs and Entrepreneurs with Tailored Financial Solutions"}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#e2efff] rounded-[20px] py-[20px_15px] block">
        <div className="container">
          <div className="text-[18px] leading-none font-medium text-base1 mb-[15px]">{our_offering_title ? our_offering_title : "Our Offerings"}</div>
          <div className="w-full h-auto bg-white rounded-[10px] overflow-hidden p-[15px] mb-[15px]">
            {offerings?.map((item) => (
              <div key={item.id} className="group w-full h-auto flex flex-wrap py-[8px]">
                <div className="w-[24px] h-auto aspect-square relative z-0">
                  <Image
                    src={item?.icon ? `${serverMediaPath}${item?.icon}` : "/images/offr-05.svg"}
                    alt={item?.alt}
                    fill
                    sizes="24px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-[calc(100%-24px)] pl-[16px] text-sm1">{item.title}</div>
              </div>
            ))}
          </div>
          <Link href={button_url ? button_url : "/msme-loans"} className="btn btn-base2 w-full max-w-full h-[40px]">
            {button_text ? button_text : "Get"}
          </Link>
        </div>
      </div>
    </section>
  );
}
