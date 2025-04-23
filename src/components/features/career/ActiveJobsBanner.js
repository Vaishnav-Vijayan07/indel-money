import PageBreadcrumb from "@/components/common/PageBreadcrumb";

export default function ActiveJobsBanner() {
  return (
    <section className="w-full block py-[30px_20px] lg:py-[40px_25px] 2xl:py-[50px_30px]">
      <div className="container">
        <div className="w-full block">
          <div className="text-title1">
            Active<span className="font-bold text-base2">&nbsp;Jobs</span>{" "}
          </div>
          <PageBreadcrumb />
        </div>
      </div>
    </section>
  );
}
