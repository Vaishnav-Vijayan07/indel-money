//export const dynamic = "force-dynamic";
import MsmeLoanClient from "@/pages/MsmeClient";
import { headers } from "next/headers";

function isMobileDevice(userAgent) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/msme`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const msmeData = result.data;

    if (result.status === "success") {
      return {
        contents: msmeData?.msmeLoanContent,
        offerings: msmeData?.msmeOfferings,
        faqs: msmeData?.msmeLoanFaq,
        loanTypes: msmeData?.msmeLoanTypes,
        industries: msmeData?.msmeLoanSupportedIndustries,
        audience: msmeData?.msmeTargetedAudience,
        error: result.message,
      };
    }
    return {
      contents: null,
      offerings: null,
      faqs: null,
      loanTypes: null,
      industries: null,
      audience: null,
      error: result.message,
    };
  } catch (error) {
    return {
      contents: null,
      offerings: null,
      faqs: null,
      loanTypes: null,
      industries: null,
      audience: null,
      error: "Failed to fetch service data",
    };
  }
}
async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=msme`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "MSME Loan | My Website",
        description: meta?.meta_description || "Get the best MSME loan offers with us.",
        keywords: meta?.meta_keywords || "msme loan, offers, financial services",
        error: null,
      };
    }
    return {
      title: "MSME Loan | My Website",
      description: "Get the best MSME loan offers with us.",
      keywords: "msme loan, offers, financial services",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "MSME Loan | My Website",
      description: "Get the best MSME loan offers with us.",
      keywords: "msme loan, offers, financial services",
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

export default async function MsmeLoan() {
  const { contents, offerings, faqs, loanTypes, industries, audience, error } = await fetchData();

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileDevice(userAgent);

  console.log("MSME Loan Page - User Agent:", userAgent, isMobile ? "Mobile" : "Desktop");

  if (error) {
    return <div>Failed to fetch MSME data</div>;
  }

  return (
    <MsmeLoanClient
      contents={contents}
      offerings={offerings}
      faqs={faqs}
      loanTypes={loanTypes}
      industries={industries}
      audience={audience}
      initialIsMobile={isMobile}
    />
  );
}
