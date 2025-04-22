import Image from "next/image";

const titleStyle =
  "text-[16px] lg:text-[20px] 2xl:text-[26px] 3xl:text-[28px] leading-normal font-bold text-black mb-[5px] lg:mb-[10px]";
const titleStyle2 =
  "text-[12px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] leading-normal font-bold text-black mb-[10px] lg:mb-[15px]";
const listStyle =
  "text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-black relative pl-[15px] lg:pl-[20px] before:content-[''] before:absolute before:top-[4px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]";

export default function GoldLoanCriteria() {
  return (
    <section className="py-[30px] lg:py-[40px] 2xl:py-[60px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[50%]">
            <div className="lg:pr-[60px]">
              <div className="text-black text-title1 font-normal mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">
                Gold Loan <span className="text-base2 font-bold">Steps</span>
              </div>
              <div className="mb-[10px]">
                <div className={titleStyle}>Eligibility</div>
                <p>
                  Individuals who are between ages of 18 and 75 are eligible for
                  a loan against gold.
                </p>
              </div>
              <div className="mb-[10px]">
                <div className={titleStyle}>Documentation</div>
                <p>
                  Please ensure you carry the following documents (Original) for
                  easing the process of your gold loan application.
                </p>
              </div>
              <div className="flex flex-wrap lg:max-w-[730px] -mx-[5px] lg:-mx-[10px] 2xl:-mx-[15px]">
                <div className="w-[50%] p-[5px] lg:p-[10px] 2xl:p-[15px]">
                  <div className="w-full h-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px]">
                    <div className={titleStyle2}>Identity Proof:</div>
                    <ul>
                      <li className={listStyle}>Aadhaar Card </li>
                      <li className={listStyle}>Pan card </li>
                      <li className={listStyle}>A copy of your passport</li>
                      <li className={listStyle}>Driving license</li>
                      <li className={listStyle}>Voters ID card</li>
                    </ul>
                  </div>
                </div>
                <div className="w-[50%] p-[5px] lg:p-[10px] 2xl:p-[15px]">
                  <div className="w-full h-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px]">
                    <div className={titleStyle2}>Address Proof:</div>
                    <ul>
                      <li className={listStyle}>A copy of your Passport </li>
                      <li className={listStyle}>Driving License </li>
                      <li className={listStyle}>Ration Card</li>
                      <li className={listStyle}>Electricity</li>
                      <li className={listStyle}>Telephone Bill</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] max-lg:pt-[5px]">
            <div className="group w-full h-full min-h-[268px] overflow-hidden rounded-[20px] relative z-0">
              <Image
                src={"/images/goldLoanstepimg.webp"}
                alt="aboutImg"
                fill
                sizes="800px"
                className="object-cover duration-300 transition-all group-hover:scale-[1.1] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
