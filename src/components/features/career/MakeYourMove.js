import CareerForm from '@/components/common/CareerForm'
import Image from 'next/image'
import React from 'react'

export default function MakeYourMove() {
    return (
        <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
            <div className="container">
                <div className="flex bg-[#dceafb] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[15px_0_15px_15px] lg:p-[20px_0_20px_20px] 2xl:p-[30px_0_30px_30px] 3xl:p-[35px_0_35px_35px] overflow-hidden">
                    <div className="w-full lg:w-[calc(100%-420px)] xl:w-[calc(100%-460px)] 2xl:w-[calc(100%-440px)] 3xl:w-[calc(100%-668px)]">
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
                    <div className="w-full lg:w-[420px] xl:w-[460px] 2xl:w-[440px] 3xl:w-[668px] flex items-center p-[15px] lg:p-[15px_30px] xl:p-[15px_40px] 2xl:p-[20px_60px] 3xl:p-[20px_70px]">
                        <CareerForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
