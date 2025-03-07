import Image from "next/image";
import Link from "next/link";
export default function GoldLoanCalculator() {
  return (
    <section className="w-full 2xl:pt-[60px] 2xl:pb-[60px] md:pt-[30px] md:pb-[30px] pt-[20px] pb-[20px]">
      <div className="container">
        <div className="text-title1 font-normal">Our Easy Step <span className="font-bold text-base2" >Gold Loan</span> </div>

        {/* steps */}
        <div className="flex  justify-between mt-[2.5rem]">
          <div className=" relative">
            <div>
              {/* arrow */}
              <div className="absolute 2xl:right-[calc((-100%-(-155px)))] xl:right-[calc((-100%-(-110px)))] lg:right-[calc((-100%-(-80px)))] md:right-[calc((-100%-(-20px)))]  right-[calc((-100%-(-70px)))] 2xl:max-w-[280px] xl:max-w-[230px] lg:max-w-[170px] md:max-w-[140px] max-w-[100px] w-full top-[30px] ">
                <Image
                  src="/images/ArrowGold.webp"
                  alt="aboutImg"
                  width={350}
                  height={75}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>


              <div className="2xl:w-[240px] 2xl:h-[240px] xl:w-[200px] xl:h-[200px] lg:w-[180px] lg:h-[180px] w-[100px] h-[100px] lg:p-[35px] p-[15px] rounded-full flex items-center justify-center overflow-hidden group bg-gradient-to-b from-transparent to-[#C0DBFF]">
                <Image
                  src="/images/step1.webp"
                  alt="aboutImg"
                  width={190}
                  height={190}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="info mt-[1.9rem] 2xl:max-w-[350px] xl:max-w-[280px] relative lg:max-w-[220px] max-w-[140px]">
                <div className="relative flex  justify-between w-full">
                  <div className="bg-base2 relative text-white px-4 py-2 rounded-lg 2xl:text-[1.8rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-bold 2xl:w-[150px] lg:w-[100px] w-[75px]">Step 1</div>
                  <div className="border-dashed 2xl:top-[30px] top-[18px] border border-black ml-[40px] h-[1px] w-full absolute 2xl:right-[calc((-100%-(-170px)))] xl:right-[calc((-100%-(-140px)))] lg:right-[calc((-100%-(-100px)))] md:right-[calc((-100%-(-30px)))] right-[calc((-100%-(-60px)))]  before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-1px] before:w-[10px] before:h-[10px] before:bg-base1 before:rounded-full ">
                    <span className="w-[20px] h-[20px] rounded-full bg-base1 absolute top-0 right-[-2px] bottom-0 m-auto  before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-0 before:right-0  before:w-[10px] before:h-[10px] before:bg-base2 before:rounded-full">
                    </span>
                  </div>
                </div>
                <p className="text-[#002362] 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-medium mt-[1rem]">Walk in any of ur branches with your gold</p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <div>
              {/* arrow */}

              <div className="absolute 2xl:right-[calc((-100%-(-155px)))] xl:right-[calc((-100%-(-110px)))] lg:right-[calc((-100%-(-80px)))]  md:right-[calc((-100%-(-20px)))]  right-[calc((-100%-(-70px)))] 2xl:max-w-[280px] xl:max-w-[230px] lg:max-w-[170px] md:max-w-[140px]  max-w-[100px] w-full w-full- rotate-x-180 top-1/4">
            
                <Image
                  src="/images/ArrowGold.webp"
                  alt="aboutImg"
                  width={350}
                  height={75}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="2xl:w-[240px] 2xl:h-[240px] xl:w-[200px] xl:h-[200px] lg:w-[180px] lg:h-[180px]  w-[100px] h-[100px] lg:p-[35px] p-[15px] rounded-full flex items-center justify-center overflow-hidden group bg-gradient-to-b from-transparent to-[#C0DBFF]">
                <Image
                  src="/images/step2.webp"
                  alt="aboutImg"
                  width={190}
                  height={190}
                  className="w-[190px] h-[190px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="info mt-[1.9rem]  2xl:max-w-[350px] relative xl:max-w-[280px] lg:max-w-[220px] max-w-[140px]">
                <div className="relative flex  justify-between w-full">
                  <div className="bg-base2 text-white px-4 py-2 relative rounded-lg 2xl:text-[1.8rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-bold 2xl:w-[150px] lg:w-[100px] w-[75px]">Step 2</div>
                  <div className="border-dashed 2xl:top-[30px] top-[18px] border border-black ml-[40px] h-[1px] w-full absolute 2xl:right-[calc((-100%-(-170px)))] xl:right-[calc((-100%-(-140px)))] lg:right-[calc((-100%-(-100px)))] md:right-[calc((-100%-(-30px)))] right-[calc((-100%-(-60px)))]  before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-1px] before:w-[10px] before:h-[10px] before:bg-base1 before:rounded-full ">
                    <span className="w-[20px] h-[20px] rounded-full bg-base1 absolute top-0 right-[-2px] bottom-0 m-auto  before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-0 before:right-0  before:w-[10px] before:h-[10px] before:bg-base2 before:rounded-full">
                    </span>
                  </div>
                </div>
                <p className="text-[#002362] 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-medium mt-[1rem]">Fill in and submit the required documents</p>
              </div>
            </div>
          </div>
          <div className=" relative  ">
            <div>
              {/* arrow */}
              <div className="absolute 2xl:right-[calc((-100%-(-155px)))] xl:right-[calc((-100%-(-110px)))]  md:right-[calc((-100%-(-20px)))]  right-[calc((-100%-(-70px)))] 2xl:max-w-[280px] xl:max-w-[230px] lg:max-w-[170px] md:max-w-[140px]  xl:w-[230px] w-full top-[30px] hidden">
                <Image
                  src="/images/ArrowGold.webp"
                  alt="aboutImg"
                  width={350}
                  height={75}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="2xl:w-[240px] 2xl:h-[240px] xl:w-[200px] xl:h-[200px] lg:w-[180px] lg:h-[180px] w-[100px] h-[100px] lg:p-[35px] p-[15px] rounded-full flex items-center justify-center overflow-hidden group bg-gradient-to-b from-transparent to-[#C0DBFF]">
                <Image
                  src="/images/step3.webp"
                  alt="aboutImg"
                  width={190}
                  height={190}
                  className="w-[190px] h-[190px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="info mt-[1.9rem] 2xl:max-w-[350px] xl:max-w-[280px] lg:max-w-[220px] max-w-[140px]">
                <div className="realtive flex items-center justify-between w-full">
                  <div className="bg-base2 text-white px-4 py-2 rounded-lg 2xl:text-[1.8rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-bold 2xl:w-[150px] lg:w-[100px] w-[75px]">Step 3</div>
                  <div className="border-dashed  border border-black ml-[40px] h-[1px] w-full absolute 2xl:right-[calc((-100%-(-170px)))] xl:right-[calc((-100%-(-140px)))] lg:right-[calc((-100%-(-100px)))] right-[calc((-100%-(-70px)))]   before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-1px] before:w-[10px] before:h-[10px] before:bg-base1 hidden before:rounded-full">
                    <span className="w-[20px] h-[20px] rounded-full bg-base1 absolute top-0 right-[-2px] bottom-0 m-auto  before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-0 before:right-0  before:w-[10px] before:h-[10px] before:bg-base2 before:rounded-full">
                    </span>
                  </div>
                </div>
                <p className="text-[#002362] 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-medium mt-[1rem]">After evaluation, our
                  officer will sanction the loan</p>
              </div>
            </div>
          </div>
        </div>


      </div >
    </section >
  );
}
