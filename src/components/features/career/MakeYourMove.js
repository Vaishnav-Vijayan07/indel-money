import CareerForm from '@/components/common/CareerForm'
import Image from 'next/image'
import React from 'react'

export default function MakeYourMove() {
    return (
        <section className="w-full block max-sm:bg-[#f8e8ea] p-[0_0_40px] sm:py-[30px] lg:py-[40px] 2xl:py-[50px]">
            <div className="container max-sm:!p-[0]">
                <div className="flex flex-wrap bg-[#dceafb] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[15px] sm:p-[15px_0_15px_15px] lg:p-[20px_0_20px_20px] 2xl:p-[30px_0_30px_30px] 3xl:p-[35px_0_35px_35px] overflow-hidden">
                    <div className="w-full sm:w-[calc(100%-468px)] lg:w-[calc(100%-420px)] xl:w-[calc(100%-460px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-668px)]">
                        <div className="group w-full h-full rounded-[15px] lg:rounded-[20px] 2xl:rounded-[30px] 3xl:rounded-[36px] overflow-hidden relative z-0">
                            <Image
                                src={"/images/career-1.jpg"}
                                alt={"career"}
                                fill
                                sizes="50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-[468px] lg:w-[420px] xl:w-[460px] 2xl:w-[576px] 3xl:w-[668px] flex items-center p-[0_5px] sm:p-[15px] lg:p-[15px_30px] xl:p-[15px_40px] 2xl:p-[20px_60px] 3xl:p-[20px_70px]">
                        <div>
                            <div className="w-full pt-[10px] mb-[12px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                                <div className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-black font-bold flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                    Make Your <span className="text-base2 font-bold">&nbsp;Move</span></div>
                                <div className="text-sm1  max-sm:hidden">Upload Your Resume ; we&apos;ll connect when the right role opens up.</div>
                            </div>
                            <CareerForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
