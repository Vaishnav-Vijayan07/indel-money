import dynamic from "next/dynamic";
import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import ContactFaq from "@/components/features/contact/ContactFaq";

const BranchLocator = dynamic(() => import("@/components/features/home/BranchLocator"));

async function fetchContactsData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/contacts", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { contents: result.data?.content, faqs: result.data?.faqs, officeContacts: result.data?.officeContacts, error: null };
    }
    return { contents: null, faqs: null, officeContacts: null, error: result.message };
  } catch (error) {
    return { contents: null, faqs: null, officeContacts: null, error: "Failed to fetch management data" };
  }
}

export default async function Contact() {
  const { contents, faqs, officeContacts } = await fetchContactsData();

  return (
    <>
      <ContactBanner trollFreeNum={contents?.troll_free_num} contactTitle={contents?.title} contactDesc={contents?.description} />
      <WriteIntel formTitle={contents?.form_title} formSubtitle={contents?.form_sub_title} contactImage={contents?.contact_image} />
      <BranchLocator variant="contact" pageContent={contents} />
      <ContactFaq faqs={faqs} officeContacts={officeContacts} faqTitle={contents?.faq_title} faqSuperTitle={contents?.faq_super_title} />
    </>
  );
}
