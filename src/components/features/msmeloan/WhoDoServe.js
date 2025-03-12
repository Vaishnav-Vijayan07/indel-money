import Image from "next/image";
import Link from "next/link";
import WhoServeSlider from "@/components/features/msmeloan/WhoServeSlider";


export default function LoanSlider() {
    return (
        <section className="w-full py-[20px] md:py-[20px] xl:pt-[30px] 2xl:py-[50px] 3xl:py-[70px]">
            <div className="container">
                <h2 className="text-title1 mb-[20px] 2xl:mb-[30px]">
                Who Do 
                    <span className="text-base2 font-bold">&nbsp;serve</span>
                </h2>
                <WhoServeSlider className={"bg-[linear-gradient(156deg,rgba(23,71,158,0.20)_6.47%,rgba(198,59,59,0.20)_91.2%)]"} />
            </div>
        </section>


    );
}