//export const dynamic = "force-dynamic";
"use client";
import ConsumerDurable from "@/components/features/services/ConsumerDurable";
import ProductCovered from "@/components/features/services/ProductCovered";
import FeatureBenefit from "@/components/features/services/FeatureBenefit";
import MobEligibility from "@/components/features/services/MobEligibility";
import { useMediaQuery } from "@react-hook/media-query";

export default function CDLoanClient({contents, benfits, products, initialIsMobile}) {
  const isMobileViewport = useMediaQuery("only screen and (max-width: 768px)");
  // Combine server-side and client-side detection (client takes precedence after hydration)
  const isMobile = typeof window !== "undefined" ? isMobileViewport : initialIsMobile;
  return (
    <>
      {/* ConsumerDurable contents */}
      <ConsumerDurable
        page_title={contents?.page_title}
        image={contents?.image}
        image_alt={contents?.image_alt}
        loan_offer_description={contents?.loan_offer_description}
        loan_offer_title={contents?.loan_offer_title}
        loan_offer_button_text={contents?.loan_offer_button_text}
        loan_offer_button_link={contents?.loan_offer_button_link}
      />

      {/* ProductCovered contents */}
      <ProductCovered
        products={products}
        title={contents?.covered_products_section_title}
        image={contents?.covered_products_section_image}
        criteriaTitle={contents?.eligibility_criteria_title}
        criteriaIcon={contents?.eligibility_criteria_icon}
        criteriaDescription={contents?.eligibility_criteria_description}
        criteriaNote={contents?.eligibility_criteria_note}
        isMobile={isMobile}
      />

      {/* ConsumerDurable contents */}
      <FeatureBenefit benefits={benfits} title={contents?.feature_title} image={contents?.feature_image} />

      {/* Eligibility for mobile view contents */}
      <div className="block sm:hidden">
        {isMobile && (
          <MobEligibility
            criteriaTitle={contents?.eligibility_criteria_title}
            criteriaIcon={contents?.eligibility_criteria_icon}
            criteriaDescription={contents?.eligibility_criteria_description}
            criteriaNote={contents?.eligibility_criteria_note}
          />
        )}
      </div>
    </>
  );
}
