import CareerBanner from "@/components/features/career/CareerBanner";
import CareerLifeAtIndel from "@/components/features/career/CareerLifeAtIndel";
import MobCareerLifeAtIndel from "@/components/features/career/MobCareerLifeAtIndel";
import EmployeeTestimonials from "@/components/features/career/EmployeeTestimonials";
import FindJob from "@/components/features/career/FindJob";
import MakeYourMove from "@/components/features/career/MakeYourMove";
import BenefitsEmployee from "@/components/features/career/BenefitsEmployee";
import MobBenefitsEmployee from "@/components/features/career/MobBenefitsEmployee";

export default async function Career() {
  async function fetchData() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/career`, {
        cache: "no-store", // Ensure fresh data
      });

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
          error: null,
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
        error: result.message,
      };
    } catch (error) {
      return {
        contents: null,
        banners: null,
        benefits: null,
        awards: null,
        testimonials: null,
        states: null,
        jobs: null,
        error: "Failed to fetch career data",
      };
    }
  }

  const { contents, banners, benefits, awards, testimonials, states, jobs, error } = await fetchData();

  console.log("Career Page Data:", {
    contents,
    banners,
    benefits,
    awards,
    testimonials,
    states,
    jobs,
    error,
  });

  return (
    <div className="w-full h-auto bg-linear-to-b from-base1/10 to-base2/10">
      <CareerBanner banners={banners} />
      <FindJob
        states={states}
        jobs={jobs}
        find_job_title={contents?.find_job_title}
        find_job_button_name={contents?.find_job_button_name}
        find_job_button_link={contents?.find_job_button_link}
      />
      <MakeYourMove
        make_your_move_title={contents?.make_your_move_title}
        make_your_move_description={contents?.make_your_move_description}
        make_your_move_image={contents?.make_your_move_image}
        image_alt={contents?.image_alt}
        isGeneral={true}
      />
      <div className="hidden sm:block">
        <CareerLifeAtIndel />
      </div>
      <div className="block sm:hidden">
        <MobCareerLifeAtIndel />
      </div>
      <div className="hidden sm:block">
        <BenefitsEmployee benefits={benefits} benefits_title={contents?.benefits_title} />
      </div>
      <div className="block sm:hidden">
        <MobBenefitsEmployee />
      </div>
      <EmployeeTestimonials
        testimonials={testimonials}
        awards={awards}
        testimonial_button_link={contents?.testimonial_button_link}
        testimonial_button_name={contents?.testimonial_button_name}
        testimonial_description={contents?.testimonial_description}
        testimonial_title={contents?.testimonial_title}
      />
    </div>
  );
}
