import Image from "next/image";
import parse from "html-react-parser";

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

export default function MobInstantHasslefree({ title, description, hassle_free_image, hassle_free_image_alt, GoldloanBenefits }) {
  return (
    <section className="w-full block py-[25px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)] rounded-[20px]">
      <div className="container">
        <h2 className="text-title1 text-[#5e5959bf] mb-[15px] [&>span]:text-base2 [&>span]:font-bold">{parse(title)}</h2>
        <div className="group w-full h-auto aspect-[380/190] overflow-hidden rounded-[30px] relative z-0 mb-[15px]">
          <Image
            src={hassle_free_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${hassle_free_image}` : "/images/loanImag1.webp"}
            alt={hassle_free_image_alt ? hassle_free_image_alt : "loanImg"}
            fill
            sizes="380px"
            className="object-cover duration-300 transition-all group-hover:scale-[1.1]"
          />
        </div>
        <p>{parse(description)}</p>
        <div className="w-full h-auto bg-white rounded-[10px] p-[15px_15px] 4xs:p-[20px_30px] shadow-[0_0_25px_0_rgba(0,0,0,0.1)] mt-[15px]">
          <ul className="flex flex-wrap max-h-[180px] overflow-y-auto">
            {GoldloanBenefits?.map((item, index) => (
              <li key={index} className="w-full h-auto flex flex-wrap mb-[15px]">
                <div className="w-18px">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.icon}`}
                    title={item?.icon}
                    alt={item?.image_alt}
                    width={18}
                    height={18}
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="text-[14px] leading-[1.2] font-normal text-black w-[calc(100%-18px)] pl-[10px]">{item?.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
