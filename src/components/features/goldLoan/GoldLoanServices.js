import Image from "next/image";

export default function GoldLoanServices({ features }) {
  return (
    <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[60px] 3xl:py-[80px]">
      <div className="container">
        <div className="flex flex-wrap lg:items-center m-[-15px] 3xl:p-[-20px]">
          {features?.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="w-full lg:w-[calc(100%/3)] p-[15px] 3xl:p-[20px] my-[-20px] 3xl:my-[-20px] max-lg:flex max-lg:flex-wrap"
            >
              {group?.map((service, index) => (
                <div key={index} className="h-fit w-full py-[15px] 3xl:py-[20px] ">
                  {service.is_center ? (
                    <div className="max-lg:hidden w-full max-w-[250px] 2xl:max-w-[300px] 3xl:max-w-[400px] bg-white rounded-[20px] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.15)] flex items-center justify-center m-auto min-h-[100px] 3xl:min-h-[160px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${service.icon}`}
                        alt="loanicon"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain max-w-[100px] 3xl:max-w-[145px]"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#D4E6FF] rounded-[24px] p-[20px_15px] lg:p-[30px_20px] 2xl:p-[45px_35px]">
                      <div className="flex flex-wrap mb-[15px] 3xl:mb-[25px]">
                        <div className="w-[30px] 2xl:w-[40px] 3xl:w-[60px] aspect-square">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${service.icon}`}
                            alt="service-icon"
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[18px] lg:text-[20px] 2xl:text-[22px] 3xl:text-[30px] font-medium leading-[1.3] text-base1 w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] pl-[10px] 2xl:pl-[15px] 3xl:pl-[30px]">
                          {service.title}
                        </div>
                      </div>
                      <p>{service.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
