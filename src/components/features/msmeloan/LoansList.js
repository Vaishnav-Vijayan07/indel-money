import LoanSlider from "@/components/features/msmeloan/LoanSlider";

export default function LoansList() {
    return (
        <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px] lg:pb-[60px]">
            <div className="container">
                <LoanSlider />
            </div>
        </section>

    );
}