// import BranchForm from '@/components/common/BranchForm';
// import BranchLocationMap from '@/components/common/BranchLocationMap';

import BranchForm from '../../common/BranchForm'
import BranchLocationMap from '../../common/BranchLocationMap';

export default function BranchLocator({ variant = 'default' }) {
  return (
    <section className={`${variant === "contact" ? "bg-[#e6edf7] py-[20px] lg:py-[30px] 2xl:py-[40px] 3xl:py-[50px]" : ""} w-full block`}>
      <div className="container">
        <div className="mb-7.5 flex flex-col lg:flex-row items-start xl:items-start justify-between flex-wrap">
          <div className="text-title1 w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-530px)] 2xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-668px)] xl:pr-[20px] 2xl:pr-[60px] 3xl:pr-[80px]">
            Discover Gold Loan Options Near
            You with Our <span className='text-base2 font-bold'>Branch Locator</span>
          </div>
          <div className="w-full lg:w-[468px] xl:w-[530px] 2xl:w-[600px] 3xl:w-[668px] mt-2 xl:mt-[15px] xl:text-right">
            <p className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#323232]">
              Find the closest Indel Money branch using our locator tool and unlock gold loan opportunities in your vicinity. Let&apos;s work together to meet your financial needs.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <BranchForm />
      </div>
      <div className={`${variant === "home" ? "pb-[45px] xl:pb-[60px] 2xl:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(235,2,8,0.10)] before:absolute before:bottom-0 before:left-0 before:-z-1 before:pointer-events-none before:rotate-180" : variant === "contact" ? "" : ""}`}
      >
        <div className="container">
          <BranchLocationMap />
        </div>
      </div>
    </section >
  );
}