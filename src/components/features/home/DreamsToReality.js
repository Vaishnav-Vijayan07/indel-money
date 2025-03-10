
import Image from "next/image";
import Link from "next/link";
import CounterBox from "./CounterBox";
export default function DreamsToReality() {
  const counters = [
    { end: 30, suffix: "+", text: "Backed by years of experience" },
    { end: 300, suffix: "+", text: "Over 300 Convenient Locations Across India" },
    { end: 1, suffix: "Million +", text: "Trusted by millions, our financial services" },
    { end: 1700, suffix: "+", text: "Trusted, Skilled Employees Committed to Excellence" },
  ];


  return (
    <section className="w-full 2xl:pt-[100px] 2xl:pb-[60px] md:pt-[60px] md:pb-[30px] pt-[40px] pb-[20px]">
      <div className="container">
        <div className="flex w-full flex-wrap">
          <div className="3xl:w-[calc(100%-700px)] xl:w-[calc(100%-576px)] lg:w-[calc(100%-450px)] md:w-full mb-4">
            <div className="3xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[13px] text-[12px]">
              Welcome to <span className="text-base4 ">INDEL MONEY</span>
            </div>
            <h2 className="text-title1 font-medium mb-2 2xl:mb-3 leading-tight">
              From <span className="text-base2 font-bold">Dreams To Reality</span>,
              We&apos;re With You Every Step Of The Way.
            </h2>
            <h2 className="3xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[18px] text-[14px] font-bold lg:mb-4 mb-2 text-base1">
              Indel Money : <span className="font-normal text-[#343434]">Overview</span>
            </h2>
            <p className="text-[#343434] font-normal leading-relaxed mb-5">
              Indel Money is a comprehensive financial services provider dedicated to offering a diverse array of
              solutions to meet the unique needs of every individual and organization. Our wide range of services is
              designed to cater to high-net-worth individuals, business institutions, retail investors, and the general
              public alike, ensuring that everyone, regardless of their financial standing, has access to expert financial
              guidance and solutions.
            </p>
            <p className="font-normal text-[#343434] leading-relaxed">
              We understand that life is filled with various financial requirements, both expected and unforeseen, and
              that each person&apos;s needs are different. That’s why at Indel Money, we provide personalized, value-added
              services that are tailored to meet the specific goals and dreams of our clients.
            </p>
            <Link
              href="/"
              className="relative group flex items-center justify-between lg:mt-[30px] mt-[15px]
                    w-full max-w-[175px] xl:max-w-[200px] 3xl:max-w-[220px] 
                    px-5 3xl:h-[65px] lg:h-[50px] h-[45px] 
                    rounded-full bg-base1 text-white 
                    font-medium transition-all duration-300 overflow-hidden shadow-lg"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px]">
                Our Story
              </span>
              <div
                className="relative z-10 flex items-center justify-center 
                      w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] 3xl:w-[48px] 3xl:h-[48px] 
                      bg-white rounded-full text-red-500 transition-all duration-300 
                      group-hover:translate-x-2 group-hover:bg-red-600 group-hover:text-white"
              >
                <svg viewBox="0 0 48 49"
                  className="transition-all duration-100 group-hover:fill-white"
                >
                  <path
                    d="M24 0.777344C10.7456 0.777344 0 11.523 0 24.7773C0 38.0317 10.7456 48.7773 24 48.7773C37.2544 48.7773 48 38.0317 48 24.7773C48 11.523 37.2544 0.777344 24 0.777344ZM37.7812 25.4617L29.5659 33.7473C29.477 33.842 29.37 33.9178 29.2513 33.9704C29.1325 34.023 29.0044 34.0512 28.8746 34.0535C28.7448 34.0558 28.6158 34.032 28.4953 33.9836C28.3748 33.9352 28.2652 33.8632 28.173 33.7717C28.0808 33.6803 28.0078 33.5713 27.9584 33.4512C27.909 33.3311 27.8842 33.2023 27.8854 33.0724C27.8866 32.9426 27.9139 32.8143 27.9655 32.6951C28.0171 32.5759 28.092 32.4683 28.1859 32.3786C30.6207 29.9234 28.8816 25.7495 25.4238 25.7495H10.9097C10.6518 25.7495 10.4046 25.6471 10.2222 25.4648C10.0399 25.2825 9.9375 25.0352 9.9375 24.7773C9.9375 24.5195 10.0399 24.2722 10.2222 24.0899C10.4046 23.9076 10.6518 23.8052 10.9097 23.8052H25.4229C28.8806 23.8052 30.6197 19.6313 28.185 17.1761C28.0911 17.0864 28.0161 16.9788 27.9645 16.8596C27.9129 16.7404 27.8857 16.6121 27.8845 16.4823C27.8833 16.3524 27.9081 16.2236 27.9575 16.1035C28.0069 15.9834 28.0798 15.8744 28.172 15.783C28.2642 15.6915 28.3738 15.6195 28.4943 15.5711C28.6148 15.5227 28.7438 15.4989 28.8737 15.5012C29.0035 15.5034 29.1316 15.5317 29.2503 15.5843C29.3691 15.6369 29.4761 15.7127 29.565 15.8073L37.7812 24.093C37.9619 24.2749 38.0633 24.5209 38.0633 24.7773C38.0633 25.0338 37.9619 25.2798 37.7812 25.4617Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="3xl:w-[700px] xl:w-[576px] lg:w-[450px] w-full lg:pl-[60px] 2xl:pl-[120px] lg:m-0 m-auto relative z-0">
            <div className="w-full  relative z-0">
              <div className="w-full h-full rounded-[20px] overflow-hidden group z-20">
                <Image src={"/images/aboutImg.webp"} alt="aboutImg" width={610} height={535} className="w-full h-full  object-cover duration-450 transition-all group hover:scale-[1.1]  " />
              </div>
            </div>
            <div className="w-full h-full max-w-[860px] pointer-events-none absolute -z-10 top-2.5 left0 rounded-[30%] blur-3xl bg-[linear-gradient(90deg,rgba(1,91,255,0.2)_0%,rgba(255,25,0,0.2)_100%)]"></div>
          </div>
        </div>
        {/* counter section */}
        <div
          className="w-full h-full mt-[45px] xl:p-[35px] p-[25px] 2xl:px-[75px] xl:px-[45px] px-[35px] overflow-hidden rounded-[28px] 
          bg-[linear-gradient(156deg,rgba(23,71,158,0.15)_6%,rgba(198,59,59,0.15)_91%)]"
        >
          <div className="flex flex-wrap w-full justify-center lg:text-left text-center">
            {counters.map((item, index) => (
              <CounterBox key={index} {...item} showDivider={index < 3} />
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
