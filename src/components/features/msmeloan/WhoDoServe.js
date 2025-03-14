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
                <WhoServeSlider className={""} />
            </div>
        </section>


    );
}