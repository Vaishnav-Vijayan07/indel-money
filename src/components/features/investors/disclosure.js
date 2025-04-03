import Image from "next/image";
import Link from "next/link";

export default function Disclosure() {


    return (
        <section className="pt-[25px] 3xl:pt-[50px]">
            <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Disclosure on Liquidity Risk</div>

            <div className="flex items-center justify-between px-[25px] py-[15px] 3xl:px-[35px] 3xl:py-[25px] bg-[#DCEAFB] rounded-[15px] 3xl:rounded-[24px] overflow-hidden">
                <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] font-medium text-black">
                    View Disclosure on Liquidity Risk
                </span>
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#F30000] text-white text-[12px] 2xl:-text-[16px] 3xl:text-[18px] font-bold px-4 py-2 rounded-full min-w-[150px] 3xl:min-w-[200px]"
                >
                    VIEW PDF
                    <div className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] ml-2 bg-white rounded-full flex items-center justify-center ">
                        <Image
                            src="/images/pdficon.svg"
                            alt="PDF Icon"
                            width={20}
                            height={20}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
}
