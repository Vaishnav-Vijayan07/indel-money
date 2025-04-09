import BranchForm from "../../common/BranchForm";

export default function MobBranchLocator() {
  return (
    <section className="w-full py-[30px_15px] mb-[30px] bg-white shadow-[0_0_150px_0_rgba(0,0,0,0.25)] rounded-[10px_10px_0_0]">
      <div className="container">
        <div className="text-title1 mb-[10px] 2xl:mb-[15px]">
          Discover Gold Loan Options Near You with Our&nbsp;
          <span className="text-base2 font-bold">Branch Locator</span>
        </div>
        <BranchForm />
      </div>
    </section>
  );
}
