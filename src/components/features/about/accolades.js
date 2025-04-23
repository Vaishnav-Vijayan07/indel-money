
import AccoladesSlider from "./AccoladesSlider";

export default function Accolades() {
  return (
    <section className="relative py-[65px] bg-gradient-to-r from-[rgba(255,255,255,0.30)] via-[rgba(23,71,158,0.18)] to-[rgba(255,255,255,0.16)]">
      <div className="container">
        <h2 className="text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[50px] text-black font-medium text-center 2xl:mb-[50px] xl:mb:[30px] mb-[20px]">
          Accolades & Achievements
        </h2>
        <AccoladesSlider />
      </div>
    </section>
  );
}
