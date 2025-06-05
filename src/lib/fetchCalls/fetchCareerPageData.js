export async function fetchData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/career`, {
            cache: "no-store", // Ensure fresh data
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                // This will trigger the not-found.js page
                notFound();
            }
            // This will trigger the error.js page
            throw new Error(`HTTP ${response.status}: Failed to fetch career data`);
        }

        const result = await response.json();
        const careerData = result.data;

        if (result.status === "success") {
            return {
                contents: careerData?.careersContent,
                banners: careerData?.careerBanners,
                benefits: careerData?.empBenefits,
                awards: careerData?.awards,
                testimonials: careerData?.testimoinials,
                states: careerData?.careerStates,
                jobs: careerData?.careerJobs,
                error: null
            };
        }

        return {
            contents: null,
            banners: null,
            benefits: null,
            awards: null,
            testimonials: null,
            states: null,
            jobs: null,
            error: result.message
        };



    } catch (error) {
        // Re-throw the error to be caught by error.js
        if (error.message?.includes('notFound')) {
            // Let notFound() handle this
            throw error;
        }
        throw new Error(`Failed to fetch career data: ${error.message}`);
    }


}
