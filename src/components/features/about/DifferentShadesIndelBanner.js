import PageBreadcrumb from "@/components/common/PageBreadcrumb";

export default function DifferentShadesIndelBanner() {
  return (
    <section className="w-full block pt-[30px] lg:pt-[40px] 2xl:pt-[50px]">
      <div className="container">
        <div className="w-full mb-[20px] lg:mb-[30px] 2xl:mb-[50px]">
          <PageBreadcrumb />
        </div>
        <div className="text-title2">
          Different <br />
          Shades Of {""}
          <span className="font-bold text-base2">
            Indel
          </span>
        </div>
      </div>
    </section>
  )
}
