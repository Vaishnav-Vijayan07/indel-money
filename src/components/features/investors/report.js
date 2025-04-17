
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../investors/sidebar";
import Annualreport from "../investors/annualreport";
import Annualreturns from "../investors/annualreturns";

export default function Scheme() {

    const reports = [
        { year: "2023-24", link: "/pdfs/2023-24.pdf" },
        { year: "2022-23", link: "/pdfs/2022-23.pdf" },
        { year: "2021-22", link: "/pdfs/2021-22.pdf" },
        { year: "2020-21", link: "/pdfs/2020-21.pdf" },
        { year: "2019-20", link: "/pdfs/2019-20.pdf" },
        { year: "2018-19", link: "/pdfs/2018-19.pdf" },
        { year: "2017-18", link: "/pdfs/2017-18.pdf" },
        { year: "2016-17", link: "/pdfs/2016-17.pdf" },
    ];
    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    <span className="text-[#F30000] font-bold">Investors</span>
                </h2>
                <div className='breadcrumb flex flex-wrap mb-[35px]'>
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
                        Investors Report
                    </Link>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full sm:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
                        <Sidebar />
                    </div>
                     <div className="w-full sm:w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
                       
                        <Annualreport />
                        <Annualreturns />
                    </div>

                </div>
            </div>
        </section>
    );
}
