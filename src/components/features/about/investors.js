import Image from "next/image";
import Link from "next/link";

export default function Investors() {
  return (
    <section className="w-full 3xl:py-[90px] xl:py-[80px] py-[40px] bg-gradient-to-r from-transparent to-[#17479E]/15">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-[calc(100%-550px)]  xl:w-[calc(100%-600px)] 2xl:w-[calc(100%-740px)] 3xl:w-[calc(100%-940px)] flex items-center max-lg:mb-[20px]">
            <div className="lg:max-w-[290px] xl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[570px]">
              <div className="text-title1 font-medium xl:mb-[20px] mb-[10px]">
                Investors
              </div>
              <p className="3xl:text-[18px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum"
              </p>
              <Link
                href="/"
                className="group btn btn-base1 relative z-0 flex items-center justify-between mt-[15px] lg:mt-[30px] w-full max-w-[190px] 2xl:max-w-[240px] 3xl:max-w-[270px] pr-3 pl-5 h-[45px] lg:h-[40px] 2xl:h-[50px] 3xl:h-[60px] rounded-full bg-base2 text-white font-bold transition-all duration-300 overflow-hidden shadow-lg hover:bg-base1"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px]">
                  INVESTORS REPORT
                </span>
                <div className="relative z-10 flex items-center justify-center w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[48px] 3xl:h-[48px] bg-base1 rounded-full text-red-500 transition-all duration-300  group-hover:translate-x-2 group-hover:bg-red-600 group-hover:text-white">
                  <svg viewBox="0 0 13 11" className="max-w-[15px]">
                    <path
                      d="M8.125 10.375L6.9875 9.19687L9.87187 6.3125H0V4.6875H9.87187L6.9875 1.80312L8.125 0.625L13 5.5L8.125 10.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[550px] xl:w-[600px] 2xl:w-[740px] 3xl:w-[940px] ">
            <div className="flex flex-wrap h-[350px] 2xl:h-[510px] m-[-7px] 3xl:m-[-10px]">
              <div className="w-[calc(100%-250px)] xl:w-[calc(100%-275px)] 2xl:w-[calc(100%-350px)] 3xl:w-[calc(100%-410px)] h-full p-[7px] 3xl:p-[10px]">
                <div className="w-full h-[70%] pb-[15px] 3xl:pb-[25px]">
                  <div className="rounded-[30px] overflow-hidden w-full h-full group">
                    <Image
                      src={"/images/investors1.webp"}
                      width={510}
                      height={310}
                      alt="Investor Image"
                      priority
                      className="w-full h-full object-cover duration-300 transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="w-full h-[calc(100%-70%)]">
                  <div className="flex w-[calc(100%+9px)] h-full relative left-[3px] text-center">
                    <div className="w-1/3 m-[-3px]">
                      <div className="w-full h-full bg-gradient-to-r from-[#1A66F0] to-[#93BFFA] flex items-center justify-center overflow-hidden rounded-[7px]">
                        <div className="w-full h-fit p-[10px] 2xl:p-[20px] 3xl:p-[27px]">
                          <div className="text-[15px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-white mb-[8px]">
                            Listed in
                          </div>
                          <div className="text-[20px] xl-[text-[20px] 2xl:text-[22px] 3xltext-[30px] font-bold text-white leading-[1.2]">
                            NSE/BSE
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 m-[-3px]">
                      <div className="w-full h-full bg-gradient-to-r from-[#FD363B] to-[rgba(235,2,8,0.10)] flex items-center justify-center overflow-hidden rounded-[7px]">
                        <div className="w-full h-fit p-[10px]  2xl:p-[20px] 3xl:p-[27px]">
                          <div className="text-[15px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-white mb-[8px]">
                            Listed in
                          </div>
                          <div className="text-[20px] xl-[text-[20px] 2xl:text-[22px] 3xltext-[30px] font-bold text-white leading-[1.2]">
                            Stock Market
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 m-[-3px]">
                      <div className="w-full h-full bg-gradient-to-r from-[#1A66F0] to-[#93BFFA] flex items-center justify-center overflow-hidden rounded-[7px]">
                        <div className="w-full h-fit p-[10px] 2xl:p-[20px] 3xl:p-[27px]">
                          <div className="text-[20px] xl-[text-[20px] 2xl:text-[22px] 3xltext-[30px] font-bold text-white mb-[8px]">
                            500cr +
                          </div>
                          <div className="text-[15px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-white leading-[1.2]">
                            Company total revenue
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] xl:w-[275px] 2xl:w-[350px] 3xl:w-[410px] p-[7px] 3xl:p-[10px]">
                <div className="rounded-[30px] overflow-hidden w-full h-full group">
                  <Image
                    src={"/images/investors2.webp"}
                    width={400}
                    height={515}
                    alt="Investor Image"
                    priority
                    className="w-full h-full object-cover duration-300 transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
