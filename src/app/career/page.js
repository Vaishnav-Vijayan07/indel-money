import BenefitsEmployee from "@/components/features/career/BenefitsEmployee";
import CareerBanner from "@/components/features/career/CareerBanner";
import CareerLifeAtIndel from "@/components/features/career/CareerLifeAtIndel";
import EmployeeTestimonials from "@/components/features/career/EmployeeTestimonials";
import FindJob from "@/components/features/career/FindJob";
import MakeYourMove from "@/components/features/career/MakeYourMove";

export default function Career() {
  return (
    <>
      <CareerBanner />
      <FindJob />
      <MakeYourMove />
      <CareerLifeAtIndel />
      <BenefitsEmployee />
      <EmployeeTestimonials />
    </>
  )
}
