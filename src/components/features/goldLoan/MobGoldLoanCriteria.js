import Image from "next/image";
import parse from "html-react-parser";
const titleStyle = "text-[14px] leading-normal font-medium text-black mb-[5px]";
const boxStyle = "w-full h-auto bg-white rounded-[10px] border-dashed border-[1px] border-black mb-[10px] p-[15px]";
const listStyle =
  "text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-black relative pl-[15px] lg:pl-[20px] before:content-[''] before:absolute before:top-[4px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]";

export default function MobGoldLoanCriteria({
  title,
  description,
  idProofTitle,
  identityProof,
  addressProofTitle,
  addressProof,
  image,
}) {
  return (
    <section className="w-full block py-[30px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)]">
      <div className="container">
        <div className="text-title1 mb-[20px] &[span]:font-bold &[span]:text-base2">{parse(title)}</div>
        <div className={boxStyle}>
          <div className={titleStyle}>Eligibility</div>
          <p>{parse(description)}</p>
        </div>
        <div className={boxStyle}>
          <div className={titleStyle}>Documentation</div>
          <p>Please ensure you carry the following documents (Original) for easing the process of your gold loan application.</p>
          <div className="w-full h-auto bg-white rounded-[10px] p-[20px_18px] shadow-[0_0_4px_0_rgba(0,0,0,0.1)] my-[10px]">
            <div className={`${titleStyle} font-bold`}>{idProofTitle}:</div>
            <ul className="columns-2">
              {identityProof.split(",").map((item, index) => (
                <li key={index} className={listStyle}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-auto bg-white rounded-[10px] p-[20px_18px] shadow-[0_0_4px_0_rgba(0,0,0,0.1)] my-[10px]">
            <div className={`${titleStyle} font-bold`}>{addressProofTitle}:</div>
            <ul className="columns-2">
              {addressProof.split(",").map((item, index) => (
                <li key={index} className={listStyle}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
