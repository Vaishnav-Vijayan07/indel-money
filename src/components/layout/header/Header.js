import MobHeader from "./MobHeader";
import DeskHeader from "./DeskHeader";
import "./Header.css";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/header`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { contents: result.data, error: null };
    }
    return { contents: null, error: result.message };
  } catch (error) {
    return { contents: null, error: "Failed to fetch header data" };
  }
}

export default async function Header() {
  const { contents: headerData, error } = await fetchData();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="hidden lg:block">
        <DeskHeader headerData={headerData} />
      </div>
      <div className="block lg:hidden">
        <MobHeader />
      </div>
    </>
  );
}
