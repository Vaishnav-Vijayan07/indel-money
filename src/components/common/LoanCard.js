import Image from "next/image";
import Link from "next/link";

export default function LoanCard({ item }) {
    return (
        <Link 
            href={item?.href} 
            className="group w-full h-full block rounded-[36px] overflow-hidden p-[30px] pb-[40px] transition-all duration-[600ms] hover:bg-[#F8FBFF] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]"
        >
            <div className="w-full flex flex-wrap sm:flex-row">
                <div className="w-full h-auto xl:h-full rounded-[24px] overflow-hidden mb-[30px] aspect-465/295">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={465}
                        height={295}
                        className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]"
                    />
                </div>
                <div className="w-full 3xl:pr-[30px] sm:pr-[20px] sm:pt-0 pt-[20px]">
                    <h5 className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[30px] text-[#17479E] font-bold mb-[5px] line-clamp-1">
                        {item.title}
                    </h5>
                    <div className="text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#1E1E1E] font-normal mb-[15px] line-clamp-1">
                        {item.title2}
                    </div>
                    <div className="w-full mb-[15px] 3xl:mb-[20px] text-sm-1 line-clamp-4">
                        {item.discription}
                    </div>
                </div>
            </div>
        </Link>
    );
}
