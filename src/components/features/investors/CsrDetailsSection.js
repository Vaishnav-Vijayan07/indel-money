import Link from "next/link";
import Sidebar from "./Sidebar";
import CsrCommittee from "./CsrCommittee";
import CsrReports from "./CsrReports";
import Disclosure from "./Disclosure";

export default function CsrDetailsSection({ reports, commitee, actionPlans, content }) {
  return (
    <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
      <div className="container">
        <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
          <span className="text-[#F30000] font-bold">{content?.page_title ? content?.page_title : "Investors"}</span>
        </h2>
        <div className="breadcrumb flex-wrap mb-[35px] sm:flex hidden">
          <Link
            href="/"
            className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                    before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                    before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                    before:content-[''] duration-100 hover:text-base2 last:pointer-events-none last:before:hidden"
          >
            Home
          </Link>

          <Link
            href="/"
            className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none"
          >
            Investors Report
          </Link>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full smd:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
            <Sidebar />
          </div>
          <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] md:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
            <div className="mb-[45px] 2xl:mb-[65px] 3xl:mb-[80px]">
              <CsrCommittee data={commitee} title={content?.csr_committee_title} />
            </div>
            <div className="mb-[45px] 2xl:mb-[65px] 3xl:mb-[80px]">
              <CsrReports data={reports} title={content?.csr_reports_title} />
            </div>
            <div className="mb-[45px] 2xl:mb-[65px] 3xl:mb-[80px]">
              <CsrReports data={actionPlans} title={content?.csr_action_plan_title} />
            </div>
            <div className="mb-[45px] 2xl:mb-[65px] 3xl:mb-[80px]">
              <Disclosure contents={content} type="csr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
