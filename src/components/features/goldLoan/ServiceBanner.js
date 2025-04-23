import PageBreadcrumb from "../../common/PageBreadcrumb";
import Image from "next/image";
import HomeMarquee from "../home/HomeMarquee";

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

export default function ServiceBanner() {
  return (
    <section className="w-full relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-1 before:bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(102,102,102,0)_100%)]">
      <Image
        src="/images/goldloanBanner.webp"
        alt="value-innerBanner"
        fill
        sizes="100vw"
        className="-z-2 object-cover pointer-events-none"
      />
      <div className="container flex items-end flex-wrap justify-start p-4 md:p-6 lg:p-8 xl:p-10 text-white z-20 mx-auto pb-[60px] min-h-[360px] 2xl:min-h-[460px] 3xl:min-h-[560px]">
        <div className="w-full">
          <div className="max-w-[600px] xl:max-w-[655px] md:max-w-[755px] lg:max-w-[840px] mb-[40px]">
            <h1 className="text-[32px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[60px] 2xl:text-[84px] 3xl:text-[96px] font-normal leading-none text-white mb-[10px] lg:mb-[15px]">
              Gold
              <span className="text-base2 font-bold">&nbsp;Loan</span>
            </h1>
            <PageBreadcrumb variant="white" />
          </div>
          <div className="w-full relative z-1">
            <ul className="max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[700px] flex flex-wrap -m-[10px] 3xl:-m-[15px]">
              {goldItems.map((item, index) => (
                <li key={index} className="w-1/2 p-[10px] 3xl:p-[15px]">
                  <ServiceBannerItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HomeMarquee />
      {/* <div className="w-full h-[var(--marquee-y)] flex flex-wrap items-center bg-[#b7d0ff] relative z-10">
        <div className="w-[300px] lg:w-[240px] 2xl:w-[300px] 3xl:w-[340px] h-[var(--marquee-y)] flex items-center justify-center text-sm1 text-white font-medium bg-gradient-to-r from-base1 to-base2">
          <Image
            src={"/images/marquee-1.png"}
            width={25}
            height={25}
            alt={"coin"}
            className="w-5 h-5 3xl:w-6 3xl:h-6 mr-2 3xl:mr-3 object-contain"
          />
          Todays Gold rate : Rs.59,080
        </div>
        <div className="w-[calc(100%-300px)] lg:w-[calc(100%-240px)] 2xl:w-[calc(100%-300px)] 3xl:w-[calc(100%-340px)]">
          <Marquee speed={80} pauseOnHover={true} className="text-sm1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </Marquee>
        </div>
      </div> */}
    </section>
  );
}
