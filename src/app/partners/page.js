import PartnersSection from "@/components/partners/Partners";

async function fetchPartnersData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/partners", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, partners: result.partnersData, error: null };
    }
    return { data: null, partners: null, error: result.message };
  } catch (error) {
    return { data: null, partners: null, error: "Failed to about data" };
  }
}

export default async function Partners() {
  const { data, partners, error } = await fetchPartnersData();

  return <PartnersSection content={data} partners={partners} initialError={error} />;
}
