import ConsumerDurable from "../../../components/features/services/ConsumerDurable";
import ProductCovered from "../../../components/features/services/ProductCovered";
import FeatureBenefit from "../../../components/features/services/FeatureBenefit";
import MobEligibility from "../../../components/features/services/MobEligibility";

export default function Services() {
    return (
        <>
            {/* ConsumerDurable contents */}
            <ConsumerDurable />

            {/* ProductCovered contents */}
            <ProductCovered />

            {/* ConsumerDurable contents */}
            <FeatureBenefit />

            {/* Eligibility for mobile view contents */}
            <div className="block sm:hidden">
                <MobEligibility />
            </div>
        </>
    );
}
