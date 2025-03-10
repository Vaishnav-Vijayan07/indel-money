import EnquiryForm from "@/components/common/EnquiryForm";
import HomeSlider from "@/components/features/home/HomeSlider";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HeroBanner() {
  return (
    <section className="w-full block relative z-0">
      <HomeSlider />
      <div className="w-full h-[var(--marquee-y)] flex flex-wrap items-center bg-[#b7d0ff]">
        <div className="w-[300px] 2xl:w-[320px] 3xl:w-[340px] h-[var(--marquee-y)] flex items-center justify-center text-sm-1 text-white font-medium bg-gradient-to-r from-base1 to-base2">
          <Image src={"/images/marquee-1.png"} width={25} height={25} alt={"coin"} className="w-5 h-5 3xl:w-6 3xl:h-6 mr-2 3xl:mr-3 object-contain" />
          Todays Gold rate : Rs.59,080
        </div>
        <div className="w-[calc(100%-300px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-340px)]">
          <Marquee
            speed={80}
            pauseOnHover={true}
            className="text-sm-1"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Marquee>
        </div>
      </div>
      <div className="w-full max-w-[200px] sm:max-w-[276px] lg:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[520px] h-auto max:h-full absolute z-1 top-0 bottom-[var(--marquee-y)] my-auto right-[calc(((100vw-var(--container-x))/2)+var(--container-padding))] flex items-center">
        <div className="w-full h-auto relative z-00 bg-[#c0dbff] rounded-[10px] lg:py-[15px] lg:px-[30px] 3xl:py-[20px] 3xl:px-[35px]">
          <div className="text-sm lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-medium text-black mb-2 xl:mb-3 3xl:mb-4">Select the type of service you are looking for?</div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
