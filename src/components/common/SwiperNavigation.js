import Image from "next/image";

export default function SwiperNavigation({ swiperRef }) {
    return (
        <div className="[--bx-xy:30px] sm:[--bx-xy:35px] xl:[--bx-xy:30px] 2xl:[--bx-xy:50px] flex gap-x-[15px] xl:gap-x-[15px] 2xl:gap-x-[20px]">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-[var(--bx-xy)] h-auto aspect-square bg-white cursor-pointer rounded-full transition hover:bg-[#CFDFFE]"
            >
                <Image
                    src="/images/nursing_agencies-navigation-icon.svg"
                    alt="icon"
                    width={24}
                    height={24}
                    className="w-full h-full block"
                />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[var(--bx-xy)] h-auto aspect-square bg-white cursor-pointer rounded-full transition hover:bg-[#CFDFFE]"
            >
                <Image
                    src="/images/nursing_agencies-navigation-icon.svg"
                    alt="icon"
                    width={24}
                    height={24}
                    className="w-full h-full block rotate-180"
                />
            </button>
        </div>
    );
}
