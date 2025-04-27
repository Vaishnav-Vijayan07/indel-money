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

export default function InstantHasslefree() {
  return (
    <section className="w-full block py-[35px] xl:py-[45px] 2xl:py-[65px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)] rounded-[20px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-[450px] 2xl:w-[550px] 3xl:w-[700px] max-xl:mb-[15px]">
            <div className="w-full h-full ">
              <div className="w-full h-full overflow-hidden rounded-[30px]">
                <Image
                  src={"/images/loanImag1.webp"}
                  alt="loanImg"
                  width={700}
                  height={550}
                  className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1] "
                />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[calc(100%-450px)] 2xl:w-[calc(100%-550px)] 3xl:w-[calc(100%-700px)] xl:pl-[50px] 3xl:pl-[70px] max-lg:mb-[25px]">
            <div className="text-title1 font-normal text-black mb-[15px] 2xl:mb-[30px] 3xl:mb-[40px]">
              Instant & hassle free <br />
              <span className="text-base2 font-bold">Gold Loan</span>
            </div>
            <p>
              Availing gold loan from Indel Money branches is super easy. You
              just walk into your nearest Indel Money branch with your jewellery
              to get maximum value for your gold and receive the loan at our
              instant counter processing with minimal documentation, the
              shortest processing time and low interest rates. We yearn for
              customer satisfaction and our happiness lies in serving you best.
            </p>
            <div className="w-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px] mt-[10px] lg:mt-[15px] 2xl:mt-[25px]">
              <ul className="flex flex-wrap">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "w-[230px] 2xl:w-[300px] max-w-[50%]"
                        : "w-[calc(100%-230px)] 2xl:w-[calc(100%-300px)]"
                    } 3xl:text-[18px] 2xl:text-[14px] text-[12px] text-[#000] relative mb-[10px] 2xl:mb-[15px] flex flex-wrap`}
                  >
                    <div className="w-18px h-[18px] 2xl:w-[20px] 2xl:h-[22px] 3xl:w-[24px] 3xl:h-[24px]">
                      <Image
                        src={feature.icon}
                        alt="loanicon"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-[calc(100%-18px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-24px)] pl-[10px] 3xl:pl-[15px]">
                      {feature.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
