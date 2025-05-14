import Countersec from "./Countersec";
import CountersecCopy from "./Countersec copy";

export default function AboutFinacial({ statsData }) {
  return (
    <section className="w-full py-[50px] 2xl:py-[80px] 3xl:py-[100px]">
      <div className="container">
        <div className="flex flex-wrap items-end">
          <div className="w-full lg:w-[calc(100%-576px)] xl:w-[calc(100%-700px)] 2xl:w-[calc(100%-768px)] 3xl:w-[calc(100%-1024px)] max-lg:mb-[20px] lg:pr-[25px] xl:pr-[30px] 2xl:pr-[35px] 3xl:pr-[35px]">
            <div className="w-full">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[64px] leading-none font-bold text-base2 mb-[4px] xl:mb-[6px]">
                Indel
              </h2>
              <h4 className="text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[38px] 3xl:text-[50px] leading-[1.1] font-medium text-black mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                Your Financial Partner for a Brighter Future
              </h4>
              <h5 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[28px] 3xl:text-[34px] font-medium text-black mb-[10px] 2xl:mb-[15px]">
                Truly Indian Born
              </h5>
              <div className="max-w-full lg:max-w-[calc(100%-20px)] xl:max-w-[calc(100%-40px)] 2xl:max-w-[calc(100%-80px)] 3xl:max-w-[calc(100%-100px)]">
                <p>
                  Indel Money, an RBI-regulated Non-Banking Finance Company (NBFC) since 1986, has built a strong foundation on the values of Indian
                  civilization. With 268 branches across Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Odisha, Maharashtra, Madhya
                  Pradesh, Delhi-NCR, and Puducherry, we’ve served millions for over two decades
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[576px] xl:w-[700px] 2xl:w-[768px] 3xl:w-[1024px]">
            {/* <Countersec /> */}
            <CountersecCopy statsData={statsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
