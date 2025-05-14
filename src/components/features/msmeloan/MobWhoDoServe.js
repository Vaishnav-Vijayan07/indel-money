import LoanCardBx from "@/components/features/msmeloan/LoanCardBx";

const slides = [
  {
    image: "/images/serve01.jpg",
    alt: "Loan Image 1",
    title: "Manufacturing Enterprises",
    description:
      "Enterprises engaged in the manufacture, production, processing, preservation or packaging of goods with investment (original cost) in plant & machinery.",
    href: "/",
  },
  {
    image: "/images/serve02.jpg",
    alt: "Loan Image 2",
    title: "Small Traders",
    description:
      "Enterprises engaged in small trading activities including small provision stores, medical stores, kirana stores, diary farms, poultries, textile shops, farm product trading/retailers & wholesalers, automobile workshops, service centres etc.",
    href: "/",
  },
  {
    image: "/images/serve03.jpg",
    alt: "Loan Image 3",
    title: "Service Enterprises",
    description:
      "Enterprises involved in providing or rendering of services with investments (original cost) in equipment excluding land, building, furniture and fittings not directly related to services rendered.",
    href: "/",
  },
];

export default function MobWhoDoServe() {
  return (
    <section className="w-full py-[20px] md:py-[20px] xl:pt-[30px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        <h2 className="text-title1 mb-[20px] 2xl:mb-[30px]">
          Who Do
          <span className="text-base2 font-bold">&nbsp;Serve</span>
        </h2>
        <div className="w-full -mx-[6px] flex flex-wrap">
          {slides?.map((item, index) => {
            return (
              <div key={index} className="p-[6px] w-full sm:w-1/2 lg:w-1/3">
                <LoanCardBx variant={"whoDoServeMob"} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
