import Sliderbox from "./Sliderbox";
import { renderHtml } from "@/lib/utils/htmlParser";

export default function AboutSupermarket({ title, serviceImages, description, sub_title }) {
  
  
  return (
    <section className="relative  top-0 left-0 w-full h-full content-[''] bg-[linear-gradient(270deg,rgba(23,71,158,0.00)_3.16%,rgba(23,71,158,0.15)_97.06%)]">
      <div className="container">
        <div className="flex flex-wrap max-md:flex-col-reverse">
          <div className="3xl:w-[620px] 2xl:w-[550px] xl:w-[450px] lg:w-[350px] md:w-[300px] w-full  ">
            <Sliderbox serviceImages={serviceImages} />
          </div>
          <div className="3xl:w-[calc(100%-620px)] 2xl:w-[calc(100%-550px)] xl:w-[calc(100%-450px)] lg:w-[calc(100%-350px)] md:w-[calc(100%-300px)] w-full  3xl:pl-[110px] xl:pl-[80px] md:pl-[50px] py-[40px] flex flex-wrap items-center before:absolute before:top-0 before:right-0 before:w-[60%] before:h-full before:content-[''] before:bg-[linear-gradient(94deg,rgba(243,0,0,0.00)_3.16%,rgba(235,2,8,0.15)_97.06%)]">
            <div className="contentBx">
              <div className="text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[45px] text-[##1E1E1E] font-normal leading-[1.2] mb-[20px] [&>span]:text-[25px] [&>span]:lg:text-[30px] [&>span]:xl:text-[35px] [&>span]:2xl:text-[40px] [&>span]:3xl:text-[50px] [&>span]:text-[#F30000] [&>span]:font-bold">
                {title ? renderHtml(title) : ""}
                  {/* <h5 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[28px] 3xl:text-[34px] font-medium text-black mb-[10px] 2xl:mb-[15px]">
                {sub_title ? sub_title : "Truly Indian Born"}
              </h5> */}
              </div>
              <div className="3xl:max-h-[450px] 2xl:max-h-[400px] xl:max-h-[300px] lg:max-h-[250px] md:h-[200px] overflow-auto pr-[15px]">
                {" "}
                {description ? renderHtml(description) : ""}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
