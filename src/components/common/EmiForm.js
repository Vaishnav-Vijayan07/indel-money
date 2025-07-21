"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useMemo, useState } from "react";
import EnquiryModal from "./EnquiryModal";

const labelStyle = "text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none font-normal text-black line-clamp-1";
const resultStyle = "text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-bold text-black line-clamp-1";

export default function EmiForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [loanAmount, setLoanAmount] = useState(1); // in lakhs
  const [interestRate, setInterestRate] = useState(7); // in %
  const [tenure, setTenure] = useState(36); // in months

  // Handle form submission
  function onSubmit(event) {
    event.preventDefault();

    const formData = {
      loan_amount: `${loanAmount} lakhs`,
      interest_rate: `${interestRate} %`,
      tenure,
      loan_emi: emi,
      total_interest: totalInterest,
      total_payment: totalPayment,
    };

    setSubmittedData(formData);
    setIsDialogOpen(true);
  }

  // Handle dialog cancel
  function handleCancel() {
    setIsDialogOpen(false);
  }

  function calculateEMI(P, annualRate, N) {
    // Validate inputs: ensure they are positive numbers
    if (
      typeof P !== "number" ||
      isNaN(P) ||
      P <= 0 ||
      typeof annualRate !== "number" ||
      isNaN(annualRate) ||
      annualRate <= 0 ||
      typeof N !== "number" ||
      isNaN(N) ||
      N <= 0
    ) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
      };
    }

    const R = annualRate / 12 / 100;
    const numerator = P * R * Math.pow(1 + R, N);
    const denominator = Math.pow(1 + R, N) - 1;

    // Avoid division by zero
    if (denominator === 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
      };
    }

    const emi = numerator / denominator;
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }

  const principal = Number(loanAmount) * 100000 || 0;

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    return calculateEMI(principal, interestRate, tenure);
  }, [principal, interestRate, tenure]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
            <div className={labelStyle}>Loan Amount (lakhs)</div>
            {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
            <Slider value={[loanAmount]} onValueChange={(value) => setLoanAmount(value[0])} min={1} max={100} step={1} />
          </div>
          <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
            <div className={labelStyle}>Interest rate (%)</div>
            {/* <Slider defaultValue={[20]} max={31} step={1} /> */}
            <Slider value={[interestRate]} onValueChange={(value) => setInterestRate(value[0])} min={1} max={31} step={1} />
          </div>
          <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
            <div className={labelStyle}>Tenure (in months)</div>
            {/* <Slider defaultValue={[69]} max={70} step={[12]} /> */}
            <Slider value={[tenure]} onValueChange={(value) => setTenure(value[0])} min={12} max={70} step={12} />
          </div>
          <div className="w-full mb-2 xl:mb-3 3xl:mb-4">
            <div className="flex items-center xl:justify-between gap-x-[20px] sm:gap-x-[10px] 2xl:gap-x-[20px] 3xl:gap-x-[30px]">
              <div className="max-sm:w-1/3">
                <div
                  className={`${labelStyle} max-sm:text-[8px] max-sm:line-clamp-none mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`}
                  title="Loan EMI"
                >
                  Loan EMI
                </div>
                <div className={resultStyle}>{emi}</div>
              </div>
              <div className="w-[1px] h-[20px] lg-[30px] xl:h-[40px] 2xl:h-[46px] 3xl:h-[52px] bg-[#6497db]"></div>
              <div className="max-sm:w-1/3">
                <div
                  className={`${labelStyle} max-sm:text-[8px] max-sm:line-clamp-none mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`}
                  title="Total Interest Payable"
                >
                  Total Interest Payable
                </div>
                <div className={resultStyle}>{totalInterest}</div>
              </div>
              <div className="w-[1px] h-[20px] lg-[30px] xl:h-[40px] 2xl:h-[46px] 3xl:h-[52px] bg-[#6497db]"></div>
              <div className="max-sm:w-1/3">
                <div
                  className={`${labelStyle} max-sm:text-[8px] max-sm:line-clamp-none mb-[5px] xl:mb-[10px] 3xl:mb-[15px]`}
                  title="Total Payment (Principal + Interest)"
                >
                  Total Payment (Principal + Interest)
                </div>
                <div className={resultStyle}>{totalPayment}</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
            <Button
              className="btn btn-base1 max-w-[100px] lg:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px uppercase ml-auto"
              type="submit"
            >
              apply now
            </Button>
          </div>
        </div>
      </form>
      {isDialogOpen && (
        <EnquiryModal
          isDialogOpen={isDialogOpen}
          onCancel={handleCancel}
          enquiryCalculatorData={submittedData}
          type={"emi_calculator"}
        />
      )}
    </>
  );
}
