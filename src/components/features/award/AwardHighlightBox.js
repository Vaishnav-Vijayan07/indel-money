
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 1",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 2",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 3",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 3",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 3",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        href: "/",
    },
];

export default function AwardHighlightBox({ variant = 'default' }) {
    return (
        <div className="relative z-0 w-full h-full block rounded-[35px] bg-[#B7D0FF] p-[15px_20px] sm:p-[30px_30px] lg:p-[30px] 2xl:p-[40px_30px_40px_40px] 3xl:p-[80px_50px_50px_70px]">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={false}
                pagination={{ clickable: true }}
                className="awardSlide">
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full flex flex-wrap sm:flex-row flex-col-reverse">
                            <div className="w-full sm:w-[calc(100%-150px)] lg:w-[calc(100%-180px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-276px)] 3xl:w-[calc(100%-376px)] 2xl:pr-[90px] xl:pr-[40px] md:pr-[20px] sm:pr-[20px]">
                                {variant === "employeeTestimonials" &&
                                    <div className="text-title1 font-bold leading-[1] mb-[5px] lg:mb-[10px] text-[#f30000]">Awards</div>

                                }
                                <h5 className="sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] 3xl:text-[40px] text-black font-normal mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                                    {item.title}
                                    <span className="block text-[#EB0208] uppercase font-bold">&nbsp;&apos;
                                        {item.title2}
                                        &apos;
                                    </span>
                                </h5>
                                <div className="w-full mb-[15px] 3xl:mb-[20px] text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] line-clamp-8">
                                    {item.discription}
                                </div>
                            </div>
                            <div className="w-[150px] lg:w-[180px] xl:w-[220px] 2xl:w-[276px] 3xl:w-[376px]">
                                <div className="group w-full h-full rounded-[24px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={370}
                                        height={465}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute z-1 left-0 bottom-0 w-[20%] h-full pointer-events-none">
                <Image
                    src={"/images/award-highlightbox-bg.png"}
                    alt={"bg"}
                    width={360}
                    height={460}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                />
            </div>
        </div>


    );
}