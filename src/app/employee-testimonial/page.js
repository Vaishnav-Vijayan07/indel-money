import Testimonial from "@/pages/Testimonials";
// async function fetchData() {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event-gallery`, {
//             cache: "no-store", // Ensure fresh data
//         });

//         const result = await response.json();
//         const galleryData = result.data;

//         if (result.status === "success") {
//             return {
//                 contents: galleryData?.galleryPageContent,
//                 medias: galleryData?.galleryItems,
//                 sliderItems: galleryData?.mainSliderItems,
//                 error: null
//             };
//         }

//         return {
//             contents: null,
//             medias: null,
//             sliderItems: null,
//             error: result.message
//         };

//     } catch (error) {
//         return {
//             contents: null,
//             medias: null,
//             sliderItems: null,
//             error: "Failed to fetch gallery data"
//         };
//     }
// }

export default async function EmployeeTestimonial() {
  return <Testimonial />;
}
