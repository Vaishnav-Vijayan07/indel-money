export const dynamic = "force-dynamic";
import EventDetail from "@/components/features/indel-money-cares/EventDetail";
import RecentEvents from "@/components/features/indel-money-cares/RecentEvents";

// Fetch blog data for a specific post
async function fetchEventData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/indel-cares/${slug}`, {
    //   next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    

    if (result.status === "success") {
      const { event, recentEvents } = result.data || {};
      return {
        data: event,
        recentEvents,
        error: null,
      };
    }
    return {
      data: null,
      recentEvents: null,
      error: result.message,
    };
  } catch (error) {
    return { data: null, recentEvents: null, error: "Failed to fetch blog data" };
  }
}

export default async function IndelEvent({ params }) {
  const { slug } = await params;
  const { data: eventData, recentEvents, error: eventError } = await fetchEventData(slug);

  // Handle error state for blog data
  if (eventError || !eventData) {
    return (
      <div className="container py-10">
        <h1>Error Loading Indel cares event</h1>
        <p>{eventError || "Event not found."}</p>
      </div>
    );
  }

  return (
    <>
      <EventDetail data={eventData} />
      <RecentEvents recentBlogs={recentEvents} error={eventError} />
    </>
  );
}
