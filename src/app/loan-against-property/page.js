//export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import LAPClient from "../../pages/LAPClient";

function isMobileDevice(userAgent) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/loan-against-property`, {
      cache: "force-cache",
      next: { revalidate: 600 },
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
    console.error("Error fetching service data:", error);
    return { contents: null, benfits: null, products: null, error: "Failed to fetch service data" };
  }
}

export default async function Services() {
  const { contents, benfits, products, error } = await fetchData();

  const headersList = await headers(); // ✅ await here
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileDevice(userAgent);

  if (!contents || !benfits || !products) {
    return <div>Failed to data</div>;
  }

  return (
    <LAPClient
      contents={contents}
      benfits={benfits}
      products={products}
      initialIsMobile={false} // Assuming you want to handle mobile detection client-side
    />
  );
}
