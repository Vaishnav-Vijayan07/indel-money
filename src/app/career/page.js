import CareerBanner from "@/components/features/career/CareerBanner";
import CareerLifeAtIndel from "@/components/features/career/CareerLifeAtIndel";
import MobCareerLifeAtIndel from "@/components/features/career/MobCareerLifeAtIndel";
import EmployeeTestimonials from "@/components/features/career/EmployeeTestimonials";
import FindJob from "@/components/features/career/FindJob";
import MakeYourMove from "@/components/features/career/MakeYourMove";
import BenefitsEmployee from "@/components/features/career/BenefitsEmployee";
import MobBenefitsEmployee from "@/components/features/career/MobBenefitsEmployee";

export default function Career() {
  return (
    <div className="w-full h-auto bg-linear-to-b from-base1/10 to-base2/10">
      <CareerBanner />
      <FindJob />
      <MakeYourMove />
      <CareerLifeAtIndel />
      <MobCareerLifeAtIndel />
      <div className="hidden sm:block">
        <BenefitsEmployee />
      </div>
      <div className="block sm:hidden">
        <MobBenefitsEmployee />
      </div>
      <EmployeeTestimonials />
    </div>
  );
}
