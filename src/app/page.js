import HomeClient from "../pages/HomeClient";

async function fetchHomeData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/home", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to fetch home data" };
  }
}

export default async function HomePage() {
  const { data, error } = await fetchHomeData();

  return <HomeClient initialData={data} initialError={error} />;
}
