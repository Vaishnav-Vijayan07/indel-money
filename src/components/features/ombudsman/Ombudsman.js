import Image from "next/image";
import Link from "next/link";

const schemes = [
    { name: "Ombudsman scheme-RBI Circular", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman Scheme - Salient Features", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman-Scheme", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman scheme-RBI Circular", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman Scheme - Salient Features", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman-Scheme", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman scheme-RBI Circular", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman Scheme - Salient Features", link: "/pdfs/2023-24.pdf" },
    { name: "Ombudsman-Scheme", link: "/pdfs/2023-24.pdf" },
];

export default function Ombudsman() {
    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[20px] sm:text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    Ombudsman <span className="text-[#F30000] font-bold">Scheme</span>
                </h2>

                <div className='breadcrumb hidden sm:flex flex-wrap mb-[10px] md:mb-[35px]'>
                    <Link href="/" className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                    before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                    before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                    before:content-[''] duration-100 hover:text-base2 last:pointer-events-none last:before:hidden"  >
                        Home
                    </Link>

                    <Link
                        href="/" className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none" >
                        Ombudsman Scheme
                    </Link>
                </div>


                <div className="w-full relative">
                    <div className="grid grid-cols-1 4xs:grid-cols-2 md:grid-cols-3 gap-2 xl:gap-4 3xl:gap-6">
                        {schemes.map((scheme, index) => (
                            <div
                                key={index}
                                className="flex flex-wrap sm:flex-nowrap items-center justify-between py-[10px] sm:py-[25px] px-[15px] xl:py-[30px] xl:px-[20px] 3xl:py-[35px] 3xl:px-[25px] min-h-[75px] sm:min-h-[85px] 2xl:min-h-[100px] 3xl:min-h-[140px] rounded-2xl bg-gradient-to-r from-[rgba(23,71,158,0.40)] to-[rgba(238,56,36,0.40)]"
                            >
                                <h3 className="text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black max-w-[260px]">
                                    {scheme.name}
                                </h3>
                                <Link
                                    href={scheme.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 max-lg:mt-[10px] sm:w-fit w-full justify-end"
                                >
                                    <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black whitespace-nowrap sm:block hidden">
                                        View PDF
                                    </span>
                                    <div className="w-[24px] sm:w-[20px] h-[24px] sm:h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] bg-red-500 rounded-full flex items-center justify-center">
                                        <Image
                                            src="/images/pdf-icon.svg"
                                            alt="PDF Icon"
                                            width={24}
                                            height={24}
                                            className="w-[10px] h-[12px] sm:h-[10px] xl:w-[15px] xl:h-[15px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[24px] 3xl:h-[24px]"
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
