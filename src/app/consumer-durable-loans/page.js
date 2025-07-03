import ConsumerDurable from "@/components/features/services/ConsumerDurable";
import ProductCovered from "@/components/features/services/ProductCovered";
import FeatureBenefit from "@/components/features/services/FeatureBenefit";
import MobEligibility from "@/components/features/services/MobEligibility";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/cd-loan`, {
      // cache: "no-store", // Ensure fresh data
      cache: "no-store",
      //next: { revalidate: 600 },
    });
    const result = await response.json();
    const cdData = result.data;

    if (result.status === "success") {
      return {
        contents: cdData?.cdLoanContent,
        benfits: cdData?.cdLoanBenefits,
        products: cdData?.cdLoanProducts,
        error: result.message,
      };
    }
    return { contents: null, benfits: null, products: null, error: result.message };
  } catch (error) {
    return { contents: null, benfits: null, products: null, error: "Failed to fetch service data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=cdloan`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Consumer Durable Loan | My Website",
        description: meta?.meta_description || "Get the best consumer durable loan offers with us.",
        keywords: meta?.meta_keywords || "consumer durable loan, offers, financial services",
        error: null,
      };
    }
    return {
      title: "Consumer Durable Loan | My Website",
      description: "Get the best consumer durable loan offers with us.",
      keywords: "consumer durable loan, offers, financial services",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Consumer Durable Loan | My Website",
      description: "Get the best consumer durable loan offers with us.",
      keywords: "consumer durable loan, offers, financial services",
      error: "Failed to fetch service data",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords } = await getMetaData();

  return {
    title,
    description,
    keywords,
  };
}

export default async function Services() {
  const { contents, benfits, products, error } = await fetchData();

  if (!contents || !benfits || !products) {
    return <div>Failed to data</div>;
  }

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
      />

      {/* ConsumerDurable contents */}
      <FeatureBenefit benefits={benfits} title={contents?.feature_title} image={contents?.feature_image} />

      {/* Eligibility for mobile view contents */}
      <div className="block sm:hidden">
        <MobEligibility
          criteriaTitle={contents?.eligibility_criteria_title}
          criteriaIcon={contents?.eligibility_criteria_icon}
          criteriaDescription={contents?.eligibility_criteria_description}
          criteriaNote={contents?.eligibility_criteria_note}
        />
      </div>
    </>
  );
}
