'use client'
import 'swiper/css/pagination';
import Image from "next/image";
import "swiper/css/pagination";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

export default function GalleryDetail() {
    const data = [
        { images: ["/images/gallDet01.jpg"] },
        { images: ["/images/gallDet02.jpg"] },
        { images: ["/images/gallDet03.jpg"] },
        { images: ["/images/gallDet04.jpg"] },
        { images: ["/images/gallDet05.jpg"] },
        { images: ["/images/gallDet06.jpg"] },
        { images: ["/images/gallDet06.jpg"] },
    ];


    const ImageBox = ({ item, className }) => (
        <div className={`w-full p-1 sm:p-2 ${className}`}>
            <div className="group w-full h-full rounded-[15px] overflow-hidden">
                <Image
                    src={item.images[0]}
                    width={276}
                    height={276}
                    alt="Gallery Image"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </div>
    );

    return (
        <section className="w-full pt-[40px] pb-[30px] xl:pb-[40px] 3xl:pb-[80px]">
            <div className="container mx-auto">
                <div className="w-full pb-[20px] lg:pb-[40px] 2xl:pb-[60px]">
                    <h1 className="text-banner-1 text-black mb-[15px] 2xl:mb-[20px]">
                        Onam Celebrations 2024 for LIFE@INDEL
                    </h1>
                    <PageBreadcrumb />
                </div>
                <div className="mx-auto flex flex-wrap overflow-hidden h-fit">

                    <div className="w-full lg:w-1/2 mb-2 flex flex-wrap h-[450px] md:h-[540px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
                        <div className="flex flex-wrap w-full h-full">
                            <div className="w-1/2 h-full">
                                <ImageBox item={data[0]} className="h-1/2" />
                                <ImageBox item={data[1]} className="h-1/2" />
                            </div>
                            <div className="w-1/2 h-full">
                                <ImageBox item={data[2]} className="h-full" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 mb-2 flex flex-wrap h-[450px] md:h-[540px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
                        <div className="flex flex-wrap w-full h-[40%] md:h-[50%]">
                            <div className="w-full mb-4 h-full">
                                <ImageBox item={data[3]} width={800} height={335} className="h-full" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full h-[60%] md:h-[50%]">
                            <div className="w-1/2 h-full">
                                <ImageBox item={data[4]} width={380} height={445} className="h-full" />
                            </div>
                            <div className="w-1/2 h-full">
                                <ImageBox item={data[5]} width={380} height={445} className="h-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
