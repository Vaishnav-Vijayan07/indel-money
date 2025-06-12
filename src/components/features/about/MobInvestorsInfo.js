import Image from "next/image";
import Link from "next/link";

const mobInvestorsBxStyle =
  "w-full h-full min-h-[115px] rounded-[6px] p-[15px_15px] bg-linear-to-r from-base1 to-[#93BFFA]";
const mobInvestorsBxTextSmStyle =
  "text-[12px] 4xs:text-[14px] leading-none font-medium text-white my-[8px]";
const mobInvestorsBxTextStyle =
  "text-[16px] 4xs:text-[20px] leading-[1.2] font-bold text-white my-[8px]";

export default function MobInvestorsInfo() {
  return (
    <section className="w-full py-[30px] bg-[#d4e7ff]">
      <div className="container">
        <div className="text-title1 capitalize font-medium mb-[10px]">
          investors
        </div>
        <div className="flex [--delmt-x:10px] mb-[10px]">
          <div className="w-[calc((100%/3)+var(--delmt-x))]">
            <div className={mobInvestorsBxStyle}>
              <div className={mobInvestorsBxTextSmStyle}>Listed in</div>
              <div className={mobInvestorsBxTextStyle}>NSE/BSE</div>
            </div>
          </div>
          <div className="w-[calc((100%/3)+var(--delmt-x))] -ml-[var(--delmt-x)]">
            <div
              className={`${mobInvestorsBxStyle} bg-gradient-to-r from-base2 to-[#D7C6DC]`}
            >
              <div className={mobInvestorsBxTextSmStyle}>Listed in</div>
              <div className={mobInvestorsBxTextStyle}>Stock Market</div>
            </div>
          </div>
          <div className="w-[calc((100%/3)+var(--delmt-x))] -ml-[var(--delmt-x)]">
            <div className={mobInvestorsBxStyle}>
              <div className={mobInvestorsBxTextStyle}>500cr +</div>
              <div className={mobInvestorsBxTextSmStyle}>
                Company total revenue
              </div>
            </div>
          </div>
        </div>
        <div className="text-[13px] leading-[1.3] font-normal text-black mb-[10px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </div>
        <Link
          href={"/"}
          className="group text-[12px] leading-none font-medium capitalize text-[#100f0f] flex items-center mt-[15px] hover:text-base1"
        >
          Investors report
          <Image
            src={"/images/about-btn.svg"}
            alt="btn"
            width={24}
            height={24}
            className="aspect-square ml-[8px] group-hover:translate-x-[4px] transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
}
