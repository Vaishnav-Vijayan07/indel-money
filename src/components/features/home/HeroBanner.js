import EnquiryForm from "@/components/common/EnquiryForm";
import HomeSlider from "@/components/features/home/HomeSlider";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HeroBanner() {
  return (
    <section className="w-full block">
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
      <div className="">
        <EnquiryForm />
      </div>
    </section>
  );
}
