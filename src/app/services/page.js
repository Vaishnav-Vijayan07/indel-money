import ServiceBanner from "@/components/features/services/ServiceBanner";
import OtherGoldLoan from "@/components/features/services/OtherGoldLoan";
import SmartMoneyDeal from "@/components/features/services/SmartMoneyDeal";
import IndelRemit from "@/components/features/services/IndelRemit";

export default function Services() {
    return (
        <div className="relative">
            <div className="absolute bottom-[7%] left-0 w-full h-[65%] md:h-[55%] xl:h-[59%] bg-gradient-to-r from-[rgba(243,0,0,0)] to-[rgba(235,2,8,0.10)] z-0"></div>

            {/* InnerBanner contents */}
            <ServiceBanner />

            {/* SmartMoneyDeal contents */}
            <SmartMoneyDeal />

            {/* OtherGoldLoan contents */}
            <OtherGoldLoan />

            {/* IndelRemit contents */}
            <IndelRemit />
        </div>
    );
}
