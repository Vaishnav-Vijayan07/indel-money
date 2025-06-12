import Image from "next/image";

const features = [
  {
    icon: "/images/instantIcon1.svg",
    text: "Instant processing",
  },
  {
    icon: "/images/instantIcon2.svg",
    text: "Maximum value for your gold",
  },
  {
    icon: "/images/instantIcon3.svg",
    text: "Easy documentation",
  },
  {
    icon: "/images/instantIcon4.svg",
    text: "Part-payment and pre-payment options",
  },
  {
    icon: "/images/instantIcon5.svg",
    text: "Maximum value for your gold",
  },
  {
    icon: "/images/instantIcon6.svg",
    text: "Taking over existing gold loans at unparalleled additional funding and interest rates",
  },

  {
    icon: "/images/instantIcon8.svg",
    text: "Tailor made repayment plans",
  },
  {
    icon: "/images/instantIcon9.svg",
    text: "Guaranteed safety for your gold",
  },
  {
    icon: "/images/instantIcon10.svg",
    text: "Competitive interest rates",
  },
];

export default function MobInstantHasslefree() {
  return (
    <section className="w-full block py-[25px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)] rounded-[20px]">
      <div className="container">
        <div className="text-title1 text-black mb-[15px]">
          Instant & hassle free
          <span className="text-base2 font-bold">&nbsp;Gold Loan</span>
        </div>
        <div className="group w-full h-auto aspect-[380/190] overflow-hidden rounded-[30px] relative z-0 mb-[15px]">
          <Image
            src={"/images/loanImag1.webp"}
            alt="loanImg"
            fill
            sizes="380px"
            className="object-cover duration-300 transition-all group-hover:scale-[1.1]"
          />
        </div>
        <p>
          Availing gold loan from Indel Money branches is super easy. You just
          walk into your nearest Indel Money branch with your jewellery to get
          maximum value for your gold and receive the loan at our instant
          counter processing with minimal documentation, the shortest processing
          time and low interest rates. We yearn for customer satisfaction and
          our happiness lies in serving you best.
        </p>
        <div className="w-full h-auto bg-white rounded-[10px] p-[15px_15px] 4xs:p-[20px_30px] shadow-[0_0_25px_0_rgba(0,0,0,0.1)] mt-[15px]">
          <ul className="flex flex-wrap max-h-[180px] overflow-y-auto">
            {features.map((item, index) => (
              <li
                key={index}
                className="w-full h-auto flex flex-wrap mb-[15px]"
              >
                <div className="w-18px">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={18}
                    height={18}
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="text-[14px] leading-[1.2] font-normal text-black w-[calc(100%-18px)] pl-[10px]">
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
