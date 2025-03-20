import PageBreadcrumb from "@/components/common/PageBreadcrumb"
import Image from "next/image";
import Link from "next/link";

export default function InnerBanner() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.50)] to-[rgba(102,102,102,0.00)] z-10"></div>

            <div className="relative w-full h-auto md:h-[280px] lg:h-[340px] xl:h-[365px] 2xl:h-[460px] 3xl:h-[560px]">
                <picture className="block w-full h-full">
                    <source media="(min-width: 640px)" srcSet="/images/valueBanner.jpg" />
                    <img
                        src="/images/valueBannerMb.jpg"
                        width={640}
                        height={500}
                        alt="value-innerBanner"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </picture>
            </div>
            <div className="container absolute inset-0 flex items-center justify-start p-4 md:p-6 lg:p-8 xl:p-10 text-white z-20 max-w-screen-lg mx-auto">
                <div className="max-w-[655px] md:max-w-[755px] lg:max-w-[840px]">
                    <h1 className="text-title1 text-white mb-[15px] 2xl:mb-[20px]">
                        Our
                        <span className="text-base2 font-bold">&nbsp;Values</span>
                    </h1>
                    <PageBreadcrumb />
                </div>
            </div>
        </section>
    );
}
