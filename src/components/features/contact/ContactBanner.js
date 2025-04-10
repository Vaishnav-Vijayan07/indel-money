import PageBreadcrumb from "@/components/common/PageBreadcrumb";


export default function ContactBanner() {
  return (
    <section className="w-full block pt-[30px] lg:pt-[40px] 2xl:pt-[50px]">
      <div className="container">
        <PageBreadcrumb />
        <div className="flex flexwrap justify-between mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
          <div className="w-full lg:max-w-[420px] xl:max-w-[476px] 2xl:max-w-[576px] 3xl:max-w-[700px] pr-[15px]">
            <div className="text-title1 mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"><span className="font-bold text-base2">Connect</span> With Us</div>
            <div className="text-sm1">Let us know your requirements and we will offer you the right solutions. Feel free to drop in a mail, phone us, visit our branch or just drop in your contact details.</div>
          </div>
          <div className="lg:max-w-[468px] xl:max-w-[420px] 2xl:max-w-[576px] 3xl:max-w-[620px]">
            <div className="text-[14px] lg:text-[16px] 2xl:text-[20px] 3xl:text-[24px] mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">Need any help or clarifications regarding our services? Call now at our toll free number!</div>
            <a href="tel:18004253990" className="lg:text-[26px] sm:text-[28px] md:text-[32px] xl:text-[36px] 2xl:text-[48px] 3xl:text-[56px] leading-[1] text-base1 font-bold block hover:text-base2 transition-color duration-300" aria-label="call">1800 4253 990</a>
          </div>
        </div>
      </div>
    </section>
  )
}
