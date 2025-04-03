import AsideMenu from "@/components/common/AsideMenu";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import Image from "next/image";

const navigationItems = [
  {
    title: "Debt partners",
    href: "/partners",
  },
  {
    title: "Rating Agencies",
    href: "/",
    // sub_menu: [
    //     {
    //         title: "Contact Form",
    //         href: "/investors/contact",
    //     },
    //     {
    //         title: "FAQ",
    //         href: "/investors/faq",
    //     },
    // ]
  },
  {
    title: "Credit Bureau",
    href: "/",
  },
  {
    title: "Auditors",
    href: "/",
  },
  {
    title: "Self-regulatory association",
    href: "/",
  },
  {
    title: "Tech partners",
    href: "/",
  },
  {
    title: "Trustee ships",
    href: "/",
  },
  {
    title: "Strategic consultant",
    href: "/",
  },
  {
    title: "Business Partners",
    href: "/",
  },
];

const partners = [
  {
    src: "/images/partners-1.png",
    alt: "partners",
  },
  {
    src: "/images/partners-2.png",
    alt: "partners 2",
  },
  {
    src: "/images/partners-3.png",
    alt: "partners",
  },
  {
    src: "/images/partners-4.png",
    alt: "partners 2",
  },
  {
    src: "/images/partners-5.png",
    alt: "partners",
  },
  {
    src: "/images/partners-6.png",
    alt: "partners 2",
  },
  {
    src: "/images/partners-7.png",
    alt: "partners",
  },
  {
    src: "/images/partners-8.png",
    alt: "partners 2",
  },
  {
    src: "/images/partners-9.png",
    alt: "partners",
  },
  {
    src: "/images/partners-10.png",
    alt: "partners 2",
  },
];

export default function PartnersPage() {
  return (
    <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
      <div className="container">
        <div className="w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]">
          <div className="text-title1 font-bold text-base2">Partners</div>
          <PageBreadcrumb />
        </div>
        <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px] 3xl:-mx-[35px]">
          <div className="w-[240px] lg:w-[320px] xl:w-[420px] 2xl:w-[476px] 3xl:w-[576px] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            <AsideMenu navigationItems={navigationItems} />
          </div>
          <div className="w-[calc(100%-240px)] lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-476px)] 3xl:w-[calc(100%-576px)] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            <div className="text-title1 font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]">Debt Partners</div>
            <div className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
              {partners?.map((item, index) => (
                <PartnerLogo key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ item }) {
  return (
    <div className="w-1/3 sm:w-1/3 md:w-1/4 p-[6px_4px] lg:p-[10px_6px] 2xl:p-[15px_10px]">
      <div className="w-full h-full aspect-5/3 flex justify-center items-center border-[1px] border-solid border-[rgba(0,0,0,0.2)] rounded-[10px] lg:rounded-[16px] p-[15px] lg:p-[20px] 2xl:p-[25px] transition-border hover:border-base2">
        <Image src={item.src} alt={item.alt} width="200" height="100" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
}
