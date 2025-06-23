import Image from "next/image";
function WordTestimonialCard({ item }) {
  console.log("item", item);

  return (
    <div className="w-full md:w-1/2 p-[60px_0_6px] sm:p-[10px] 2xl:p-[22px] first:pt-[15px]">
      <div className="group w-full h-full sm:aspect-[795/415] bg-[#D4E6FF] sm:overflow-hidden rounded-[20px] 2xl:rounded-[24px] block p-[40px_20px] sm:p-[20px_30px] xl:p-[40px_30px] 3xl:p-[60px_40px] relative z-0">
        <div className="group w-[90px] h-[90px] rounded-full overflow-hidden outline-[4px] outline-white outline-solid absolute z-0 top-[-45px] right-0 left-0 m-auto sm:hidden block">
          <Image
            src={item?.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.avatar}` : "/images/testimonial-profile-image-1.jpg"}
            alt={item?.image_alt ? item?.image_alt : "testimonial-profile-image"}
            fill
            sizes="80px"
            className="group-hover:scale-105 object-cover transition-transform duration-300"
          />
        </div>
        <div className="w-[25px] lg:w-[30px] 2xl:w-[48px] aspect-48/38 relative z-1 left-[0]">
          <Image src={"/images/employeeTestimonialsVideo-delmt-1.svg"} alt={"employeeTestimonialsVideo-delmt"} fill sizes="48px" />
        </div>
        <div className="flex items-center h-[70%] 2xl:h-[80%]">
          <div className="text-[13px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#121212] font-normal line-clamp-6 m-[25px_0_45px] sm:m-[0]">
            {item?.testimonial}
          </div>
        </div>
        <div className="flex items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px] p-[10px_15px_20px] lg:p-[15px_20px] 2xl:p-[20px_30px] absolute z-1 bottom-0 left-0 right-0">
          <div className="group w-[30px] lg:w-[40px] xl:w-[60px] 2xl:w-[80px] h-[30px] lg:h-[40px] xl:h-[60px] 2xl:h-[80px] rounded-full overflow-hidden border-black/10 border-1 border-solid relative z-0 sm:flex hidden">
            <Image
              src={item?.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.avatar}` : "/images/testimonial-profile-image-1.jpg"}
              alt={item?.image_alt ? item?.image_alt : "testimonial-profile-image"}
              fill
              sizes="80px"
              className="group-hover:scale-105 object-cover transition-transform duration-300"
            />
          </div>
          <div className="w-full flex flex-col p-[20px] sm:p-[0] bg-white sm:bg-transparent rounded-[10px]">
            <div className="text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-[#004F83] capitalize line-clamp-1 mb-[7px] sm:mb-4px lg:mb-[6px] 2xl:mb-[8px]">
              {item?.name}
            </div>
            <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none font-normal text-[#121212] capitalize line-clamp-1">
              {item?.designation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordTestimonialCard;
