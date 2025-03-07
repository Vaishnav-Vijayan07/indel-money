import BranchForm from '@/components/common/BranchForm';
import BranchLocationMap from '@/components/common/BranchLocationMap';

export default function BranchLocator() {
  return (
    <section className="w-full block BranchLocator pt-[70px] min-[1281px]:pt-[85px] min-[1536px]:pt-[108px]">
      <div className="TopWrp">
        <div className="container">
          <div className="HeaderWrp mb-7.5 flex flex-col xl:flex-row items-start xl:items-start justify-between flex-wrap">
            <h4 className="w-full min-[1280px]:w-[calc(100%-530px)] min-[1536px]:w-[calc(100%-673px)] min-[1280px]:pr-[40px] text-[26px] min-[468px]:text-[32px] min-[768px]:text-[34px] min-[1536px]:text-[48px] leading-[34px] min-[468px]:leading-[42px] min-[1536px]:leading-[62px] font-normal color-base2 text-left">
              Discover Gold Loan Options Near
              You with Our <span className='text-base2'>Branch Locator</span>
            </h4>
            <div className="text-lg w-full min-[1280px]:w-[530px] min-[1536px]:w-[673px] mt-5 xl:mt-[15px] xl:text-right">
              <p className="text-[14px] min-[1280px]:text-[14px] min-[1536px]:text-[18px] text-lg text-[#323232]">
                Find the closest Indel Money branch using our locator tool and unlock gold loan opportunities in your vicinity. Let's work together to meet your financial needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='SearchForm'>
        <div className='container'>
          <BranchForm />
        </div>
      </div>
      <div className="BranchMap pb-[45px] min-[1281px]:pb-[60px] min-[1536px]:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(235,2,8,0.10)] before:absolute before:bottom-0 before:left-0 before:-z-1 before:pointer-events-none before:rotate-180">
        <div className="container">
          <BranchLocationMap />
        </div>
      </div>
    </section>
  );
}