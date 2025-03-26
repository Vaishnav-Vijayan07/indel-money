"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const employeeTestimonials = [
    {
        src: "/images/employeeTestimonials-1.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-2.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-3.jpg",
        title: "sreerajitha Balance",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-4.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-5.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-6.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-7.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    }
];
const employeeTestimonialsVideo = [
    {
        thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
        src: "/images/employeeTestimonialsVideo-1.jpg",
        user_image: "/images/employeeTestimonials-1.jpg",
        title: "Preetha S",
        designation: "Sr. Branch Manager",
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-2.jpg",
        src: "/images/employeeTestimonialsVideo-2.jpg",
        user_image: "/images/employeeTestimonials-2.jpg",
        title: "Revathy Babu",
        designation: "Branch Manager",
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
        src: "/images/employeeTestimonialsVideo-3.jpg",
        user_image: "/images/employeeTestimonials-3.jpg",
        title: "Seena Mathew",
        designation: "Branch Manager",
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
        src: "/images/employeeTestimonialsVideo-1.jpg",
        user_image: "/images/employeeTestimonials-1.jpg",
        title: "Preetha S",
        designation: "Sr. Branch Manager",
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-2.jpg",
        src: "/images/employeeTestimonialsVideo-2.jpg",
        user_image: "/images/employeeTestimonials-2.jpg",
        title: "Revathy Babu",
        designation: "Branch Manager",
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
        src: "/images/employeeTestimonialsVideo-3.jpg",
        user_image: "/images/employeeTestimonials-3.jpg",
        title: "Seena Mathew",
        designation: "Branch Manager",
    },
];

function EmployeeTestimonialsBox({ item }) {
    return (
        <div className='w-full h-auto block'>
            <div className="w-full h-[140px] lg:h-[176px] xl:h-[220px] 2xl:h-[268px] 3xl:h-[276px] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal text-black line-clamp-7 py-[20px] lg:py-[40px] 2xl:py-[60px">
                {item.description}
            </div>
            <div className="max-w-[90%] flex flex-wrap">
                <div
                    className="w-[30px] lg:w-[50px] xl:w-[60px] 2xl:w-[80px] aspect-square flex items-center justify-center bg-base1 rounded-[10px_0_0_10px] lg:rounded-[15px_0_0_15px] 2xl:rounded-[20px_0_0_20px]"
                >
                    <div
                        className="group w-[20px] lg:w-[40px] xl:w-[50px] 2xl:w-[60px] h-[20px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-full overflow-hidden border-white border-1 border-solid relative z-0"
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="60px"
                            className="group-hover:scale-105 object-cover transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="w-full h-1/2">
                        <div className='w-auto h-full bg-base1 rounded-[0_10px_0_0] lg:rounded-[0_15px_0_0] 2xl:rounded-[0_20px_0_0] inline-flex items-end pr-[15px] lg:pr-[20px] 2xl:pr-[30px]'>
                            <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1] font-medium text-white capitalize line-clamp-1">
                                {item.title}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/2">
                        <div className='w-auto h-full bg-base1 rounded-[0_10px_10px_0] lg:rounded-[0_15px_15px_0] 2xl:rounded-[0_20px_20px_0] inline-flex items-center pr-[15px] lg:pr-[20px] 2xl:pr-[30px]'>
                            <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1] font-medium text-white capitalize line-clamp-1">
                                {item.designation}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EmployeeTestimonialsVideoBox({ item }) {
    return (
        <div className='group w-full h-auto aspect-[4/3] overflow-hidden rounded-[10px] lg:rounded-[20px] 2xl:rounded-[24px] block relative z-0'>
            <div className='w-[35px] lg:w-[40px] 2xl:w-[48px] aspect-48/38 absolute z-1 top-[15px] left-[15px] lg:top-[20px] lg:left-[20px] 2xl:top-[30px] 2xl:left-[30px]'>
                <Image
                    src={"/images/employeeTestimonialsVideo-delmt-1.svg"}
                    alt={"employeeTestimonialsVideo-delmt"}
                    fill
                    sizes="48px"
                />
            </div>
            <div className='w-[35px] lg:w-[40px] 2xl:w-[48px] aspect-square absolute z-1 inset-0 m-auto'>
                <Image
                    src={"/images/icon-play.svg"}
                    alt={"play"}
                    fill
                    sizes="48px"
                />
            </div>
            <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="520px"
                className="group-hover:scale-105 object-cover transition-transform duration-300"
            />
            <div className="flex flex-wrap items-center gap-[10px] lg:gap-[15px] 2xl:gap-[20px] p-[10px_15px] lg:p-[15px_20px] 2xl:p-[20px_30px] absolute z-1 bottom-0 left-0 right-0 bg-linear-to-t to-transparent from-black/85">
                <div
                    className="group w-[30px] lg:w-[40px] xl:w-[60px] 2xl:w-[80px] h-[30px] lg:h-[40px] xl:h-[60px] 2xl:h-[80px] rounded-full overflow-hidden border-white border-1 border-solid relative z-0"
                >
                    <Image
                        src={item.user_image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                    />
                </div>
                <div className='flex flex-col'>
                    <div className="text-[14px] lg:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-[#93bffa] capitalize line-clamp-1 mb-4px lg:mb-[6px] 2xl:mb-[8px]">
                        {item.title}
                    </div>
                    <div className="text-[12px] lg:text-[12px] xl:text-[14px] 3xl:text-[16px] leading-[1] font-normal text-white capitalize line-clamp-1">
                        {item.designation}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function EmployeeTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(0);

    const handleImageClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[60px] 3xl:py-[80px] bg-base2/20">
            <div className="container mb-[30px] lg:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-[820px] xl:w-[820px] 2xl:w-[820px] 3xl:w-[820px]">
                        <div className="lg:w-[468px] xl:w-[576px] 2xl:w-[668px] 3xl:w-[720px] h-auto aspect-square block m-auto relative z-0">
                            <Image
                                src={"/images/employeeTestimonials-logo.svg"}
                                alt="employeeTestimonials-logo"
                                fill
                                sizes="576px"
                            />
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#93bffa] absolute z-1 top-[15%] left-[40%] scale-100"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#43baff] absolute z-1 top-[40%] left-[60%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#93baff] absolute z-1 top-[50%] -left-[6%] scale-40"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#ee3824] absolute z-1 top-[60%] left-[85%] scale-30"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#c9e0ff] absolute z-1 top-[70%] left-[65%] scale-50"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#dcebff] absolute z-1 top-[85%] left-[10%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#ffb1b1] absolute z-1 top-[90%] left-[85%] scale-80"></div>

                            {employeeTestimonials?.slice(0, 7).map((item, index) => (
                                <div
                                    key={index}
                                    className={`group w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[100px] h-auto aspect-4/4 rounded-full overflow-hidden border-[4px] border-solid bg-[#ffb1b1] shadow-[0_4px_60px_0_rgba(255,255,255,0.6)] absolute z-1 transition-all duration-300 
                                        ${index === activeIndex ? 'border-base2 scale-100' : 'border-white'}
                                        ${index === 0
                                            ? 'top-[2%] left-[15%] scale-55'
                                            : index === 1
                                                ? 'top-[5%] left-[60%] scale-55'
                                                : index === 2
                                                    ? 'top-[30%] left-[1%] scale-40'
                                                    : index === 3
                                                        ? 'top-[42%] left-[30%] scale-45'
                                                        : index === 4
                                                            ? 'top-[36%] left-[68%] scale-50'
                                                            : index === 5
                                                                ? 'top-[74%] left-[56%] scale-50'
                                                                : 'top-[84%] left-[20%] scale-75'
                                        }`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        sizes="120px"
                                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[calc(100%-820px)] lg:pl-[15px] xl:pl-[20px] 2xl:pl-[40px] 3xl:pl-[60px]">
                        <div className="w-full mb-[15px] lg:mb-[20px] 2xl:mb-[30px] flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px]">
                            <div className="text-title1 flex-1">Employee
                                <span className="font-bold text-base2">&nbsp;Testimonials</span>
                            </div>
                            <div className="w-[40px] lg:w-[60px] 3xl:w-[80px] h-auto aspect-4/4 relative z-0">
                                <Image
                                    src="/images/employeeTestimonials-delmt-1.svg"
                                    alt={"dfgdg"}
                                    fill
                                    sizes="80px"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px]">
                            <div className="flex-1">
                                <div className="text-sm-1">Avarage tenure is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. </div>
                            </div>
                            <Link
                                href={"/"}
                                className="btn btn-base2 max-w-[100px] lg:max-w-[120px] xl:max-w-[140px] 3xl:max-w-[180px]"
                            >
                                VIEW MORE
                            </Link>
                        </div>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            navigation={false}
                            pagination={{
                                type: 'fraction',
                                clickable: true,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            slidesPerView={1}
                            spaceBetween={0}
                            className="employeeTestimonialsSlide"
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {employeeTestimonials?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <EmployeeTestimonialsBox item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Swiper
                    modules={[Autoplay]}
                    navigation={false}
                    pagination={false}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    spaceBetween={10}
                    className="employeeTestimonialsVideoSlide"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1560: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {employeeTestimonialsVideo?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <EmployeeTestimonialsVideoBox item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}
