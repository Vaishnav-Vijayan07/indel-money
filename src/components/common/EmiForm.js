"use client"
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const labelStyle =
  "text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none font-normal text-black line-clamp-1";
const resultStyle =
  "text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-bold text-black line-clamp-1";

export default function EmiForm() {
  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Loan Amount (lakhs)</div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Interest rate (%)</div>
          <Slider defaultValue={[20]} max={31} step={1} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className={labelStyle}>Tenure (in months)</div>
          <Slider defaultValue={[69]} max={70} step={[12]} />
        </div>
        <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
          <div className="flex items-center xl:justify-between gap-x-[10px] 2xl:gap-x-[20px] 3xl:gap-x-[30px]">
            <div>
              <div className={`${labelStyle} mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`} title="Loan EMI">
                Loan EMI
              </div>
              <div className={resultStyle}>₹2500</div>
            </div>
            <div className="w-[1px] h-[20px] lg-[30px] xl:h-[40px] 2xl:h-[46px] 3xl:h-[52px] bg-[#6497db] hidden sm:block"></div>
            <div>
              <div className={`${labelStyle} mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`} title="Total Interest Payable">
                Total Interest Payable
              </div>
              <div className={resultStyle}>₹1500</div>
            </div>
            <div className="w-[1px] h-[20px] lg-[30px] xl:h-[40px] 2xl:h-[46px] 3xl:h-[52px] bg-[#6497db] hidden sm:block"></div>
            <div>
              <div className={`${labelStyle} mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`} title="Total Payment (Principal + Interest)">
                Total Payment (Principal + Interest)
              </div>
              <div className={resultStyle}>₹4000</div>
            </div>
          </div>
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
