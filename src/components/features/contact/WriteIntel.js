import Image from "next/image";
import ContactForm from "@/components/common/ContactForm";

export default function WriteIntel() {
  return (
    <section className="w-full block py-[30px_40px] lg:py-[40px_60px] 2xl:py-[60px_80px]">
      <div className="container">
        <div className="flex flex-wrap bg-[#cae5f4] rounded-[30px] overflow-hidden max-sm:bg-gradient-to-tl max-sm:from-base2/30 max-sm:to-base1/30">
          <div className="w-full sm:w-[320px] lg:w-[420px] xl:w-[476px] 2xl:w-[576px] 3xl:w-[700px] hidden sm:block">
            <div className="group w-full h-full aspect-[700/640] overflow-hidden relative z-0">
              <Image
                src={"/images/contact-1.jpg"}
                fill
                alt={"contact"}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-320px)] lg:w-[calc(100%-420px)] xl:w-[calc(100%-476px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] flex items-center p-[25px_15px] lg:p-[20px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[50px]">
            <div>
              <div className="w-full mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                <div className="text-[20px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[36px] text-black lg:text-[#525252] font-normal flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                  <Image
                    src={"/images/icon-contact-tle.svg"}
                    alt="contact tle"
                    width={50}
                    height={50}
                    className="w-[20px] 4xs:w-[30px] lg:w-[40px] 2xl:w-[50px] inline mr-[5px] lg:mr-[15px] 2xl:mr-[20px]"
                  />
                  Write to{" "}
                  <span className="text-base2 font-bold">&nbsp;Indel</span>
                </div>
                <div className="text-sm1">
                  Kindly fill up the form below to reach out to us.
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
