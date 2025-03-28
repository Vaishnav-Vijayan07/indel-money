
import Image from "next/image";

export default function Goldloanstep() {

    return (
        <section className="py-[45px] xl:py-[65px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[50%] max-lg:mb-[25px]">
                        <div className="lg:pr-[60px]">
                            <div className="text-black text-title1 font-normal mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Gold Loan <span className="text-base2 font-bold">Steps</span></div>
                            <div className="text-[18px] 2xl:text-[26px] 3xl:text-[28px] font-bold mb-[10px]">Eligibility</div>
                            <p>Individuals who are between ages of 18 and 75 are eligible for a loan against gold.</p>
                            <div className="text-[18px] 2xl:text-[26px] 3xl:text-[28px] font-bold mb-[10px]">Documentation</div>
                            <p>Please ensure you carry the following documents (Original) for easing the process of your gold loan application.</p>
                            <div className="flex flex-wrap lg:max-w-[730px] m-[-15px] 2xl:m-[-15px] mt-[20px] 3xl:mt-[30px]">
                                <div className="w-[50%] p-[10px] 2xl:p-[15px]">
                                    <div className="w-full h-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px]">
                                        <div className="text-[15px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black mb-[15px]">Identity Proof:</div>
                                        <ul>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]" >Aadhaar Card </li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]"> Pan card </li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">A copy of your passport</li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">Driving license</li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">Voters ID card</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-[50%] p-[10px] 2xl:p-[15px]">
                                    <div className="w-full h-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px]">
                                        <div className="text-[15px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black mb-[15px]">Address Proof:</div>
                                        <ul>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">A copy of your Passport </li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]"> Driving License </li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">Ration Card</li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">Electricity</li>
                                            <li className="3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[5px]">Telephone Bill</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%]">
                        <div className="w-full h-full">
                            <div className="w-full h-full overflow-hidden rounded-[20px]">
                                <Image src={"/images/goldLoanstepimg.webp"} alt="aboutImg" width={550} height={610} className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1] " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
