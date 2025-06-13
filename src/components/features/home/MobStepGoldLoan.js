import Image from "next/image";
import parse from "html-react-parser";

export default function MobStepGoldLoan({ title, className, loanSteps }) {
  return (
    <section className={`${className} w-full py-[20px_0]`}>
      <div className="container">
        <div className="text-title1 text-center mb-[10px] 2xl:mb-[15px] [&>span]:text-base2 [&>span]:font-bold">
          {title && parse(title)}
        </div>
        <div className="flex flex-wrap">
          {loanSteps?.map((item, index) => (
            <div key={index} className="w-full py-[10px]">
              <div className="w-full h-auto rounded-[10px] bg-gradient-to-r from-base1/10 to-base2/10 border-dashed border-[1px] border-base1/80 p-[15px] flex gap-[20px] @md:gap-[25px] items-center">
                <div className="w-[80px] h-[80px] relative z-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.icon_url}`}
                    alt={"icon"}
                    fill
                    className="aspect-square"
                  />
                </div>
                <div className="w-[calc(100%-80px)]">
                  <div className="text-[13px] font-normal leading-none line-clamp-1 text-white text-center capitalize mb-[5px] @md:mb-[10px] bg-gradient-to-tl from-base2 to-base1 rounded-[15px] inline-block p-[8px_15px]">
                    {parse(item?.title)}
                  </div>
                  <div className="text-[14px] font-medium leading-none line-clamp-3 text-[#002362]">{item?.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
