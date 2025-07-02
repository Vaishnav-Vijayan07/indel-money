import ServiceBanner from "@/components/features/services/ServiceBanner";
import OtherGoldLoan from "@/components/features/services/OtherGoldLoan";
import SmartMoneyDeal from "@/components/features/services/SmartMoneyDeal";
import IndelRemit from "@/components/features/services/IndelRemit";

async function fetchManagementData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/our-services`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const serviceData = result.data;

    if (result.status === "success") {
      return {
        serviceContent: serviceData.serviceContent,
        services: serviceData.services,
        serviceBenefit: serviceData.serviceBenefit,
        error: null,
      };
    }
    return { serviceContent: null, services: null, serviceBenefit: null, error: result.message };
  } catch (error) {
    return { serviceContent: null, services: null, serviceBenefit: null, error: "Failed to fetch service data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=services`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Our Services | My Website",
        description: meta?.meta_description || "Explore our services including gold loans, money transfers, and more.",
        keywords: meta?.meta_keywords || "gold loans, money transfers, financial services",
        error: null,
      };
    }
    return {
      title: "Our Services | My Website",
      description: "Explore our services including gold loans, money transfers, and more.",
      keywords: "gold loans, money transfers, financial services",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Our Services | My Website",
      description: "Explore our services including gold loans, money transfers, and more.",
      keywords: "gold loans, money transfers, financial services",
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
  const { serviceContent, services, serviceBenefit, error } = await fetchManagementData();

  if (!serviceContent || !services) {
    return <div>Failed to fetch about data</div>;
  }

  return (
    <div className="relative">
      <div className="absolute bottom-[7%] left-0 w-full h-[65%] md:h-[55%] xl:h-[59%] bg-gradient-to-r from-[rgba(243,0,0,0)] to-[rgba(235,2,8,0.10)] z-0 sm:block hidden"></div>

      {/* InnerBanner contents */}
      <ServiceBanner
        page_title={serviceContent?.page_title}
        page_super_title={serviceContent?.page_super_title}
        image={serviceContent?.banner_image}
        alt={serviceContent?.banner_alt}
      />

      {/* SmartMoneyDeal contents */}
      <SmartMoneyDeal
        deals_description={serviceContent?.deals_description}
        deals_title={serviceContent?.deals_title}
        benfits_title={serviceContent?.benfits_title}
        title={serviceContent?.gold_loan_title}
        desc={serviceContent?.gold_title_description}
        image={serviceContent?.gold_loan_image}
        alt={serviceContent?.gold_loan_image_alt}
        serviceBenefit={serviceBenefit}
      />

      {/* OtherGoldLoan contents */}
      <OtherGoldLoan services={services} />

      {/* IndelRemit contents */}
      <IndelRemit
        remit_section_description={serviceContent?.remit_section_description}
        remit_section_title={serviceContent?.remit_section_title}
        image={serviceContent?.image}
        remit_section_button_link={serviceContent?.remit_section_button_link}
        remit_section_button_title={serviceContent?.remit_section_button_title}
      />
    </div>
  );
}
