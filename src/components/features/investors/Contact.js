
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";


const contactDetails = [
    {
        title: "Company Secretary & Compliance Officer",
        name: "Ms. HANNA P NAZIR",
        address: `Indel Money Limited Indel House, 
              Changampuzhanagar South Kalamassery P.O 
              Ernakulam Kerala – 682 033`,
        phone: "+91 8606966126",
        email: "cs@indelmoney.com",
        bgColor: "bg-blue-100",
    },
    {
        title: "Debenture Trustee (Public Issue)",
        name: "VISTRA ITCL (INDIA) LIMITED",
        address: `The IL&FS Financial Center, Plot C – 22, G Block, 
              Bandra Kurla Complex Bandra (East), 
              Mumbai 400 051, Maharashtra, India.`,
        phone: "+91 22 2659 3333",
        email: "itlcomplianceofficer@vistra.com",
        website: "www.vistraitcl.com",
        bgColor: "bg-purple-100",
    },
    {
        title: "Grievance Redressal Officer",
        name: "Mr. SALIL VENU",
        address: `Office No.301, Floor No.3, Sai Arcade, 
              N.S Road Mulund West, Mumbai-400080.`,
        phone: "+91 7558815566",
        email: "admindirector@indelmoney.com",
        bgColor: "bg-blue-100",
    },
    {
        title: "Registrar and Transfer Agent",
        name: "Link Intime India Pvt Ltd",
        address: `C-101, 247 Park, L.B.S. Marg 
              Vikhroli (West), Mumbai 400 083 Maharashtra, India.`,
        phone: "+91 22 4918 6200, +91 22 4918 6060",
        email: "indelmoney.ncd@linkintime.co.in",
        website: "www.linkintime.co.in",
        bgColor: "bg-purple-100",
    },
    {
        title: "Principal Nodal Officer",
        name: "Mr. Umesh Mohanan",
        address: `Indel House, Changampuzha Nagar, 
                  South Kalamassery, Ernakulam, Kerala 682033`,
        phone: "0484 6919999",
        email: "ed.ceo@indelmoney.com",
    },
];

export default function contact() {


    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    <span className="text-[#F30000] font-bold">Investors</span>
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
                        Investors Report
                    </Link>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
                        <Sidebar />
                    </div>
                    <div className="w-full md:w-[calc(100%-270px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] md:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
                        <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Investors Contact</div>

                        <div className="flex flex-wrap w-full sm:m-[-8px] 2xl:m-[-15px] 3xl:m-[-20px]">
                            {contactDetails.map((contact, index) => (
                                <div key={index} className="w-full sm:w-[calc(100%/2)] p-[8px_0px] sm:p-[8px] 2xl:p-[-15px] 3xl:p-[20px]">
                                    <div className="w-full h-full bg-[linear-gradient(90deg,rgba(23,71,158,0.4)_0%,rgba(238,56,36,0.4)_100%)]  sm:bg-[linear-gradient(90deg,_#E5ECF5_0%,_#E5ECF5_100%)] px-[25px] py-[15px] 3xl:px-[35px] 3xl:py-[25px] rounded-[16px]">
                                        <div className="border-b border-dashed border-[#17479E]">
                                            <div className="text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-bold text-base1 pb-[15px] leading-[1.3] max-w-[75%]">
                                                {contact.title}
                                            </div>
                                        </div>
                                        <div className="border-b border-dashed border-[#17479E] py-[15px]">
                                            <div className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#121212] font-medium mb-[5px]">
                                                {contact.name}
                                            </div>
                                            <p className="text-gray-700 whitespace-pre-line">
                                                {contact.address}
                                            </p>
                                        </div>
                                        <div className="py-[10px]">
                                            <ul>
                                                <li className="mb-[5px]">
                                                    <Link
                                                        href={`tel:${contact.phone}`}
                                                        className="w-fit text-[12px] 2xl:text-[16px] 3xl:text-[20px] text-[#383838] font-medium flex items-center duration-100 hover:text-base2"
                                                    >
                                                        <Image
                                                            src="/images/call.svg"
                                                            alt="Call Icon"
                                                            width={24}
                                                            height={24}
                                                            className="w-[10px] h-[10px] 3xl:w-[20px] 3xl:h-[20px]"
                                                        />
                                                        <span className="pl-[10px] break-all">{contact.phone}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={`mailto:${contact.email}`}
                                                        className="w-fit break-all text-[12px] 2xl:text-[16px] 3xl:text-[20px] text-[#383838] font-medium flex items-center duration-100 hover:text-base2"
                                                    >
                                                        <Image
                                                            src="/images/mail.svg"
                                                            alt="Mail Icon"
                                                            width={24}
                                                            height={24}
                                                            className="w-[10px] h-[10px] 3xl:w-[20px] 3xl:h-[20px]"
                                                        />
                                                        <span className="pl-[10px]">{contact.email}</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
