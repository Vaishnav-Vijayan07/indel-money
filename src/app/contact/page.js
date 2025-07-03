import dynamic from "next/dynamic";
import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import ContactFaq from "@/components/features/contact/ContactFaq";

const BranchLocator = dynamic(() => import("@/components/features/home/BranchLocator"));

async function fetchContactsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/contacts`, {
      cache: "no-store", // Ensure fresh data
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
    return { contents: null, faqs: null, officeContacts: null, branchLocatorData: null, error: "Failed to fetch management data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=contact`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || defaultMeta.title,
        description: meta?.meta_description || defaultMeta.description,
        keywords: meta?.meta_keywords || defaultMeta.keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || defaultMeta.title,
          description: meta?.og_description || meta?.meta_description || defaultMeta.description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || defaultMeta.title,
          description: meta?.twitter_description || meta?.meta_description || defaultMeta.description,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
        },
        error: null,
      };
    }
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      },
      error: result.message || "No metadata found",
    };
  } catch (error) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      },

      error: result.message || "No metadata found",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData();
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
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
      <WriteIntel formTitle={contents?.form_title} formSubtitle={contents?.form_sub_title} contactImage={contents?.contact_image} />
      <BranchLocator variant="contact" pageContent={branchLocatorData} />
      <ContactFaq faqs={faqs} officeContacts={officeContacts} faqTitle={contents?.faq_title} faqSuperTitle={contents?.faq_super_title} />
    </>
  );
}
