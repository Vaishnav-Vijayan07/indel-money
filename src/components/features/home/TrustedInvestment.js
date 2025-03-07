import Image from "next/image";
import Link from "next/link";


export default function TrustedInvestment() {
  return (
    <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="flex flex-wrap md:-mx-[15px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
          <div className="w-full mb-[15px] lg:mb-0 md:w-4/10 md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
            <div className="flex flex-wrap h-full">

              <div className="w-full">
                <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden">
                  <Image
                    src={"/images/trust01.jpg"}
                    alt="lifeintelImg"
                    width={650}
                    height={480}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/10 md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
            <h2 className="text-title1 mb-[15px] md:mb-[20px]">
              Your Trusted <br></br> Investment Opportunity

            </h2>
            <div className="text-sm-1 mb-[15px] xl:mb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <ul className="list-disc pl-[10px] space-y-1 lg:space-y-2 marker:text-red-600 marker:text-[20px] marker:content-['•']">
              <li className="text-[#323232] pl-[15px] text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]">Listed in NSE/BSE</li>
              <li className="text-[#323232] pl-[15px] text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]">Listed in stock market</li>
              <li className="text-[#323232] pl-[15px] text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]">Company total revenue: 500cr +</li>
            </ul>
            <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px] mt-[20px] md:mt-[25px] xl:mt-[35px] 2xl:mt-[50px]">
              <div>
                <Link
                  href="/"
                  className="btn btn-base2 min-w-[120px] lg:min-w-[160px] xl:min-w-[200px] 2xl:min-w-[227px]"
                >
                  INVESTORS REPORT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


