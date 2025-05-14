import Image from "next/image";
import Link from "next/link";

const mobInvestorsBxStyle = "w-full h-full min-h-[115px] rounded-[6px] p-[15px_15px] bg-linear-to-r from-base1 to-[#93BFFA]";
const mobInvestorsBxTextSmStyle = "text-[12px] 4xs:text-[14px] leading-none font-medium text-white my-[8px]";
const mobInvestorsBxTextStyle = "text-[16px] 4xs:text-[20px] leading-[1.2] font-bold text-white my-[8px]";

export default function MobInvestorsInfo({
  title,
  buttonTitle,
  buttonLink,
  card1Title,
  card1SubTitle,
  card2Title,
  card2SubTitle,
  card3Title,
  card3SubTitle,
  description,
}) {
  return (
    <section className="w-full py-[30px] bg-[#d4e7ff]">
      <div className="container">
        <div className="text-title1 capitalize font-medium mb-[10px]">{title}</div>
        <div className="flex [--delmt-x:10px] mb-[10px]">
          <div className="w-[calc((100%/3)+var(--delmt-x))]">
            <div className={mobInvestorsBxStyle}>
              <div className={mobInvestorsBxTextSmStyle}>{card1Title}</div>
              <div className={mobInvestorsBxTextStyle}>{card1SubTitle}</div>
            </div>
          </div>
          <div className="w-[calc((100%/3)+var(--delmt-x))] -ml-[var(--delmt-x)]">
            <div className={`${mobInvestorsBxStyle} bg-gradient-to-r from-base2 to-[#D7C6DC]`}>
              <div className={mobInvestorsBxTextSmStyle}>{card2Title}</div>
              <div className={mobInvestorsBxTextStyle}>{card2SubTitle}</div>
            </div>
          </div>
          <div className="w-[calc((100%/3)+var(--delmt-x))] -ml-[var(--delmt-x)]">
            <div className={mobInvestorsBxStyle}>
              <div className={mobInvestorsBxTextStyle}>{card3Title}</div>
              <div className={mobInvestorsBxTextSmStyle}>{card3SubTitle}</div>
            </div>
          </div>
        </div>
        <div className="text-[13px] leading-[1.3] font-normal text-black mb-[10px]">{description}</div>
        <Link
          href={buttonLink || "/"}
          className="group text-[12px] leading-none font-medium capitalize text-[#100f0f] flex items-center mt-[15px] hover:text-base1"
        >
          {buttonTitle}
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
