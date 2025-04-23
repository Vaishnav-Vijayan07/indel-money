import Image from "next/image";
import Link from "next/link";

export default function LoanCard({ item, className }) {
    return (
        <Link
            href={item?.href || "#"}
            className={`${className} group w-full h-full block overflow-hidden rounded-[20px] sm:rounded-[30px] 3xl:rounded-[36px] p-[12px] sm:p-[15px] xl:p-[20px] 3xl:p-[30px] sm:pb-[40px] pb-[25px] sm:bg-none sm:shadow-none shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] transition-all duration-[600ms] sm:hover:bg-[#F8FBFF] sm:hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]`}>
            <div className="w-full flex flex-wrap sm:flex-row">
                <div className="w-full h-auto xl:h-full rounded-[15px] sm:rounded-[24px] overflow-hidden mb-[15px] xl:mb-[25px] 3xl:mb-[30px] aspect-300/190 sm:aspect-465/295">
                    <Image
                        src={item?.image || "/default-image.jpg"}
                        alt={item?.alt || "Loan image"}
                        width={465}
                        height={295}
                        className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]"
                    />
                </div>
                <div className="w-full sm:pt-0">
                    <h5 className="text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[30px] text-[#17479E] font-bold mb-[10px] sm:mb-[2px] line-clamp-1">
                        {item?.title || "Default Title"}
                    </h5>
                    {item?.title2 && (
                        <div className="text-[12px] sm:text-[14px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#1E1E1E] font-normal mb-[15px] line-clamp-1">
                            {item.title2}
                        </div>
                    )}
                    <div className="w-full sm:mb-[15px] 3xl:mb-[20px] text-sm1 line-clamp-4">
                        {item?.description || "No description available."}
                    </div>
                </div>
            </div>
        </Link>
    );
}