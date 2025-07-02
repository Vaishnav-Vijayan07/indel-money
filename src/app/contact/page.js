import dynamic from "next/dynamic";
import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import ContactFaq from "@/components/features/contact/ContactFaq";

const BranchLocator = dynamic(() => import("@/components/features/home/BranchLocator"));

const defaultContactMeta = {
  title: "Contact Us | My Website",
  description: "Get in touch with us for inquiries, support, or service-related questions. We're here to help!",
  keywords: "contact, office address, customer support, Indel Money contact, get in touch",
};

async function fetchContactsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/contacts`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    const result = await response.json();

    if (result.status === "success") {
      return {
        contents: result.data?.content,
        faqs: result.data?.faqs,
        officeContacts: result.data?.officeContacts,
        branchLocatorData: result.data?.branchLocatorData,
        error: null,
      };
    }
    return { contents: null, faqs: null, officeContacts: null, branchLocatorData: null, error: result.message };
  } catch (error) {
    return {
      contents: null,
      faqs: null,
      officeContacts: null,
      branchLocatorData: null,
      error: "Failed to fetch management data",
    };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=contact`);
    const result = await response.json();

    if (result.status === "success") {
      const meta = result.data;
      return {
        title: meta?.meta_title || defaultContactMeta.title,
        description: meta?.meta_description || defaultContactMeta.description,
        keywords: meta?.meta_keywords || defaultContactMeta.keywords,
        error: null,
      };
    }

    return {
      ...defaultContactMeta,
      error: result.message || "Failed to fetch metadata",
    };
  } catch (error) {
    return {
      ...defaultContactMeta,
      error: "Failed to fetch metadata",
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

export default async function Contact() {
  const { contents, faqs, officeContacts, branchLocatorData, error } = await fetchContactsData();

  if (!contents || !faqs || !officeContacts) {
    return <div>Failed to fetch contact data</div>;
  }

  return (
    <>
      <ContactBanner
        trollFreeNum={contents?.toll_free_number}
        contactTitle={contents?.title}
        contactDesc={contents?.description}
        helpText={contents?.help_title}
      />
      <WriteIntel
        formTitle={contents?.form_title}
        formSubtitle={contents?.form_sub_title}
        contactImage={contents?.contact_image}
      />
      <BranchLocator variant="contact" pageContent={branchLocatorData} />
      <ContactFaq
        faqs={faqs}
        officeContacts={officeContacts}
        faqTitle={contents?.faq_title}
        faqSuperTitle={contents?.faq_super_title}
      />
    </>
  );
}
