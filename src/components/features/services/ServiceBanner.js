import PageBreadcrumb from "@/components/common/PageBreadcrumb"
import Image from "next/image";

export default function ServiceBanner() {
    return (
        <section className="relative w-full overflow-hidden">

            <div className="sm:relative absolute w-full h-full md:h-[280px] lg:h-[340px] xl:h-[365px] 2xl:h-[460px] 3xl:h-[560px]">
                <picture className="block w-full h-full">
                    <source media="(min-width: 640px)" srcSet="/images/serviceBanner.jpg" />
                    <img
                        src="/images/serviceBannerMb.png"
                        width={640}
                        height={500}
                        alt="value-innerBanner"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </picture>
            </div>
            <div className="container sm:absolute relative h-auto inset-0 flex flex-wrap sm:items-center items-start sm:justify-start justify-start pt-[40px] 3xs:pt-[60px] sm:p-4 md:p-6 lg:p-8 xl:p-10 text-white z-1 mx-auto">
                <div className="max-w-[655px] md:max-w-[755px] lg:max-w-[840px]">
                    <div className="text-base1 text-[16px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal leading-normal uppercase mb-[8px] lg:mb-[10px] 2xl:mb-[15px]">OUR SERVICES</div>
                    <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px]">
                        Explore a World of <br></br>
                        <span className="text-base2 font-bold">Financial&nbsp;</span>
                        Services
                    </h1>
                    <div className="w-full sm:block hidden">
                        <PageBreadcrumb />
                    </div>
                </div>
                <div className="relative sm:hidden block w-full h-auto">
                    <div className="absolute w-full 3xs:max-w-[85%] max-w-[100%] h-auto ml-auto right-[-5%] bottom-[50px] z-0">
                        <img
                            src="/images/redBgElement.png"
                            width={758}
                            height={295}
                            alt="value-image"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <img
                        src="/images/serviceBannerPic.png"
                        width={395}
                        height={500}
                        alt="value-image"
                        loading="lazy"
                        className="w-full h-full object-cover relative max-w-[395px] ml-auto"
                    />
                </div>
            </div>
        </section>
    );
}
