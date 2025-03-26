"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from "next/image";
import Link from "next/link";

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
        src: "/images/employeeTestimonials-6.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    }
];

export default function EmployeeTestimonials() {
    return (
        <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px] bg-base2/20">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-[820px]">
                        <div className="w-[576px] h-auto aspect-square block m-auto relative z-0">
                            <Image
                                src={"/images/employeeTestimonials-logo.svg"}
                                alt="employeeTestimonials-logo"
                                fill
                                sizes="576px"
                            />
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#93bffa] absolute z-1 top-[15%] left-[40%] scale-100"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#43baff] absolute z-1 top-[40%] left-[60%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#93baff] absolute z-1 top-[50%] -left-[10%] scale-40"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#ee3824] absolute z-1 top-[60%] left-[85%] scale-30"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#c9e0ff] absolute z-1 top-[70%] left-[65%] scale-50"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#dcebff] absolute z-1 top-[85%] left-[10%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-square rounded-full bg-[#ffb1b1] absolute z-1 top-[90%] left-[85%] scale-80"></div>

                            {employeeTestimonials?.slice(0, 7).map((item, index) => (
                                <div
                                    key={index}
                                    className={`group w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[100px] h-auto aspect-4/4 rounded-full overflow-hidden border-white border-[4px] border-solid bg-[#ffb1b1] absolute z-1 
                                        ${index === 0
                                            ? 'top-[2%] left-[8%] scale-55'
                                            : index === 1
                                                ? 'top-[5%] left-[60%] scale-55'
                                                : index === 2
                                                    ? 'top-[30%] left-[0] scale-50'
                                                    : index === 3
                                                        ? 'top-[42%] left-[30%] scale-45'
                                                        : index === 4
                                                            ? 'top-[36%] left-[68%] scale-55'
                                                            : index === 5
                                                                ? 'top-[74%] left-[56%] scale-60'
                                                                : 'top-[84%] left-[20%]'
                                        }`}
                                >
                                    <Image
                                        src="/images/employeeTestimonials-1.jpg"
                                        alt={item.title}
                                        fill
                                        sizes="120px"
                                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[calc(100%-820px)]">
                        <div className="w-full mb-[15px] lg:mb-[20px] 2xl:mb-[40px] flex flex-wrap">
                            <div className="text-title1 flex-1">Employee
                                <span className="font-bold text-base2">Testimonials</span>
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
                        <div className="flex flex-wrap">
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
                            modules={[Autoplay]}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            slidesPerView={1}
                            spaceBetween={0}
                            className="employeeTestimonialsSlide"
                        >
                            {employeeTestimonials?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal text-black line-clamp-7 py-[20px] lg:py-[40px] 2xl:py-[60px">
                                            {item.description}
                                        </div>
                                        <div className="flex flex-wrap">
                                            <div
                                                className="w-[30px] lg:w-[50px] xl:w-[60px] 2xl:w-[80px] aspect-square flex items-center justify-center bg-base1 rounded-[10px_0_0_10px] lg:rounded-[15px_0_0_15px] 2xl:rounded-[20px_0_0_20px]"
                                            >
                                                <div
                                                    className="group w-[20px] lg:w-[40px] xl:w-[50px] 2xl:w-[60px] h-[20px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-full overflow-hidden border-white border-1 border-solid relative z-0"
                                                >
                                                    <Image
                                                        src="/images/employeeTestimonials-1.jpg"
                                                        alt={item.title}
                                                        fill
                                                        sizes="60px"
                                                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className="w-full h-1/2">
                                                    <div className='w-auto h-full bg-base1 rounded-[0_10px_0_0] lg:rounded-[0_15px_0_0] 2xl:rounded-[0_20px_0_0] inline-flex items-center pr-[15px] lg:pr-[20px] 2xl:pr-[30px]'>
                                                        <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1] font-medium text-white capitalize line-clamp-1">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <div className='w-auto h-full bg-base1 rounded-[0_10px_10px_0] lg:rounded-[0_15px_15px_0] 2xl:rounded-[0_20px_20px_0] inline-flex items-center pr-[15px] lg:pr-[20px] 2xl:pr-[30px]'>
                                                        <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1] font-medium text-white capitalize">
                                                            {item.designation}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}
