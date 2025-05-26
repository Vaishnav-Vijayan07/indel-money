import ServiceBanner from "@/components/features/services/ServiceBanner";
import OtherGoldLoan from "@/components/features/services/OtherGoldLoan";
import SmartMoneyDeal from "@/components/features/services/SmartMoneyDeal";
import IndelRemit from "@/components/features/services/IndelRemit";

async function fetchManagementData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/our-services", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const serviceData = result.data;

    if (result.status === "success") {
      return { serviceContent: serviceData.serviceContent, services: serviceData.services, error: null };
    }
    return { serviceContent: null, services: null, error: result.message };
  } catch (error) {
    return { serviceContent: null, services: null, error: "Failed to fetch service data" };
  }
}

export default async function Services() {
  const { serviceContent, services, error } = await fetchManagementData();

  return (
    <div className="relative">
      <div className="absolute bottom-[7%] left-0 w-full h-[65%] md:h-[55%] xl:h-[59%] bg-gradient-to-r from-[rgba(243,0,0,0)] to-[rgba(235,2,8,0.10)] z-0 sm:block hidden"></div>

      {/* InnerBanner contents */}
      <ServiceBanner page_title={serviceContent?.page_title} page_super_title={serviceContent?.page_super_title} />

      {/* SmartMoneyDeal contents */}
      <SmartMoneyDeal deals_description={serviceContent?.deals_description} deals_title={serviceContent?.deals_title} />

      {/* OtherGoldLoan contents */}
      <OtherGoldLoan services={services} />

      {/* IndelRemit contents */}
      <IndelRemit
        remit_section_description={serviceContent?.remit_section_description}
        remit_section_title={serviceContent?.remit_section_title}
        image={serviceContent?.image}
        remit_section_button_link={serviceContent?.remit_section_button_link}
        remit_section_button_title = {serviceContent?.remit_section_button_title}
      />
    </div>
  );
}
