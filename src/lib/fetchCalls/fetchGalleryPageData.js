export async function fetchData() {
    try {
        const response = await fetch("http://localhost:7700/api/web/event-gallery", {
            cache: "no-store", // Ensure fresh data
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                // This will trigger the not-found.js page
                notFound();
            }
            // This will trigger the error.js page
            throw new Error(`HTTP ${response.status}: Failed to fetch gallery data`);
        }

        const result = await response.json();
        const galleryData = result.data;

        if (result.status === "success") {
            return {
                contents: galleryData?.galleryPageContent,
                medias: galleryData?.galleryItems,
                sliderItems: galleryData?.mainSliderItems,
                error: null
            };
        }

        return {
            contents: null,
            medias: null,
            sliderItems: null,
            error: result.message
        };



    } catch (error) {
        // Re-throw the error to be caught by error.js
        if (error.message?.includes('notFound')) {
            // Let notFound() handle this
            throw error;
        }
        throw new Error(`Failed to fetch gallery data: ${error.message}`);
    }


}