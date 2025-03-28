import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const labelStyle =
  "text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1] font-normal text-black";

export default function GoldLoanForm() {
  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Loan Amount</div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Loan Amount</div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Loan Amount</div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Loan Amount</div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="w-full mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
          <Button
            className="btn btn-base2 max-w-[100px] lg:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px uppercase ml-auto"
            type="submit"
          >
            apply now
          </Button>
        </div>
      </div>
    </form>
  );
}
