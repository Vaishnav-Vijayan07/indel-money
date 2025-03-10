
import Image from "next/image";
import Link from "next/link";
export default function Innovations() {
    return (
        <section className="w-full 2xl:pt-[80px] 2xl:pb-[30px] md:pt-[30px] md:pb-[30px] pt-[40px] pb-[20px]">
            <div className="container">
                <div className="downldBx rounded-[36px] bg-[#CAE5F4] 2xl:px-[85px] lg:px-[45px] px-[30px] h-full w-full" >
                    <div className="flex flex-wrap relative  h-full w-full 2xl:py[60px] lg:py-[40px] py-[25px]">
                        {/* leftSec */}
                        <div className="2xl:max-w-[750px] xl:max-w-[650px] max-w-[450px] max-lg:max-w-full">
                            {/* titleSec */}
                            <div className="flex flex-wrap mb-[15px] lg:mb[20px] 2xl:mb[30px]">
                                <div className="tileWrap 2xl:w-[410px] lg:w-[200px] w-full lg:border-r-1 lg:border-r-[rgba(0,0,0,0.77)]  h-full">
                                    <div className="text-title1 max-w-[350px] leading-tight ">Innovations
                                        and <span>Features</span></div>
                                </div>
                                <div className="2xl:w-[calc(100%-410px] xl:w-[calc(100%-350px] lg:w-[calc(100%-200px] xl:pl-[50px] lg:pl-[30px] max-lg:w-full max-lg:mt-3">
                                    <ul>
                                        <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[3px]" >Mobile app</li>
                                        <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[3px]" >⁠Door step assistance</li>
                                        <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] " >Paperless operation</li>
                                    </ul>
                                </div>
                            </div>
                            {/* content */}
                            <p className="mb-[15px] lg:mb[20px] 2xl:mb[35px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable</p>
                            {/* download app */}
                            <div className="downloadbx">
                                <div className="text-[18px] text-[#323232] mb-[10px] font-bold ">Download our mobile application from:</div>
                                <div className="flex flex-wrap m-[-4px] max-w-[380px] w-full">
                                    <div className="w-1/2 p-[4px]">
                                        <Link href="#" className="overflow-hidden rounded-[10px] w-full h-full bg-white flex items-center justify-center downloadBtn">
                                            <Image
                                                src={"/images/Appstore.webp"}
                                                alt="downloadImg"
                                                width={180}
                                                height={60}
                                                className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1] "
                                            />
                                        </Link>
                                    </div>
                                    <div className="w-1/2 p-[4px]">
                                        <Link href="#" className="overflow-hidden rounded-[10px] w-full h-full bg-white flex items-center justify-center downloadBtn">
                                            <Image
                                                src={"/images/PlayStore.webp"}
                                                alt="downloadImg"
                                                width={180}
                                                height={60}
                                                className="w-full h-full oobject-cover duration-450 transition-all group hover:scale-[1.1] "
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* rtSec */}
                        <div className="absolute bottom-0 right-0 max-w-[300px] xl:max-w-[370px] max-lg:hidden">
                            <Image
                                src={"/images/appImg.webp"}
                                alt="downloadImg"
                                width={430}
                                height={570}
                                className="w-full h-full object-cover transition-all duration-[450ms]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}