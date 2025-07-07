"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import "./Home.css";

export default function HomeSlider({ heroBanner = [] }) {
  // Memoize swiper configuration to prevent unnecessary re-renders
  const swiperConfig = useMemo(
    () => ({
      effect: "fade",
      modules: [EffectFade, Pagination, Autoplay],
      navigation: false,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: heroBanner.length > 1,
      className: "heroSlide h-[calc(100vh-(var(--header-y)+var(--marquee-y)))]",
    }),
    [heroBanner.length]
  );

  // Early return if no banner data
  if (!heroBanner?.length) {
    return (
      <div className="heroSlide h-[calc(100vh-(var(--header-y)+var(--marquee-y)))] flex items-center justify-center bg-gray-200">
        <p className="text-gray-500">No banner content available</p>
      </div>
    );
  }

  return (
    <Swiper {...swiperConfig}>
      {heroBanner.map((item, index) => (
        <SwiperSlide
          key={item.id || index} // Use unique ID if available, fallback to index
          className="relative z-0 before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[rgba(0,0,0,0.6)] before:to-transparent before:w-full before:h-full"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}`}
            width={1920}
            height={1080}
            alt={item?.image_alt_text || `Hero banner ${index + 1}`}
            className="w-full h-full object-cover"
            priority={index === 0} // Prioritize first image loading
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-full max-w-[320px] lg:max-w-[376px] xl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[576px]">
              {item?.title && (
                <h1
                  className="text-[28px] sm:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[45px] 3xl:text-[50px] leading-[1.2] capitalize font-medium text-white mb-6 [&>span]:text-base2 [&>span]:font-bold"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              )}

              {item?.button_text && item?.button_link && (
                <Link
                  href={item.button_link}
                  className="btn btn-base2 max-w-[130px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px] inline-block"
                >
                  {item.button_text}
                </Link>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import Image from "next/image";
// import Link from "next/link";

// import "./Home.css";

// export default function HomeSlider({ heroBanner }) {
//   return (
//     <Swiper
//       effect={"fade"}
//       modules={[EffectFade, Pagination, Autoplay]}
//       navigation={false}
//       pagination={{
//         clickable: true,
//       }}
//       autoplay={{
//         delay: 4000,
//         disableOnInteraction: false,
//       }}
//       loop={heroBanner?.length > 1 ? true : true}
//       className="heroSlide h-[calc(100vh-(var(--header-y)+var(--marquee-y)))]"
//     >
//       {heroBanner?.map((item, index) => (
//         <SwiperSlide
//           key={index}
//           className="relative z-0 before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[rgba(0,0,0,0.6)] before:to-transparent before:w-full before:h-full"
//         >
//           <Image
//             src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}`}
//             width={1920}
//             height={1080}
//             alt={item?.image_alt_text}
//             className="w-full h-full object-cover"
//           />
//           <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="w-full max-w-[320px] lg:max-w-[376px] xl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[576px]">
//               <h1
//                 className="text-[28px] sm:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[45px] 3xl:text-[50px] leading-[1.2] capitalize font-medium text-white mb-6 [&>span]:text-base2 [&>span]:font-bold"
//                 dangerouslySetInnerHTML={{ __html: item.title ? item.title : "" }}
//               />

//               <Link
//                 href={item?.button_link}
//                 className="btn btn-base2 max-w-[130px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px]"
//               >
//                 {item?.button_text}
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
