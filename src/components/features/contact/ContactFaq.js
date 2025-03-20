import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/custom-accordion"

export default function ContactFaq() {

    return (
        <section className="w-full block py-[40px_30px] sm:py-[60px_40px] lg:py-[80px_60px] 2xl:py-[100px_80px]">
            <div className="container">
                <div className="flex flex-wrap -max-[10px] lg:-max-[15px] 2xl:-max-[20px]">
                    <div className="w-full lg:w-[520px] xl:w-[576px] 2xl:w-[676px] 3xl:w-[720px] px-[10px] lg:px-[15px] 2xl:px-[20px]">
                        <div className="py-[4px] lg:py-[6px] 2xl:py-[10px]">
                            <div className="w-full h-auto bg-[#dceafb] p-[15px_20px] lg:p-[30px_40px] 2xl:p-[48px_60px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px] overflow-hidden">
                                <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-base1 font-bold mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">Registered Office</div>
                                <div className="text-sm-1 text-black/80 mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                    Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai – 400 080
                                </div>
                                <LinkBox href="tel:18004253990" src="/images/icon-call.svg" title="1800 4253 990" alt="call" />
                                <LinkBox href="mailto:care@indelmoney.com" src="/images/icon-ft-email.svg" title="care@indelmoney.com" alt="mail" />
                            </div>
                        </div>
                        <div className="py-[4px] lg:py-[6px] 2xl:py-[10px]">
                            <div className="w-full h-auto bg-[#dceafb] p-[15px_20px] lg:p-[30px_40px] 2xl:p-[48px_60px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px] overflow-hidden">
                                <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-base1 font-bold mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">Corporate Office</div>
                                <div className="text-sm-1 text-black/80 mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                    Indel Money Limited, Indel House, Changampuzhanagar,South Kalamassery P. O. Ernakulam Kerala – 682 033
                                </div>
                                <LinkBox href="tel:04846919999" src="/images/icon-call.svg" title="0484 6919999, 0484 2933990" alt="call" />
                                <LinkBox href="mailto:care@indelmoney.com" src="/images/icon-ft-email.svg" title="care@indelmoney.com" alt="mail" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(100%-520px)] xl:w-[calc(100%-576px)] 2xl:w-[calc(100%-676px)] 3xl:w-[calc(100%-720px)] px-[10px] lg:px-[15px] 2xl:px-[20px]">
                        <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">FAQ</div>
                        <div className="text-title1 mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">Frequently asked <span className="text-base2 font-bold">Questions</span></div>
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>There are many variations of passages of Lorem Ipsum available?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>If you are going to use a passage of Lorem Ipsum, you need to be sure?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>All the Lorem Ipsum generators on the Internet tend to repeat?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Lorem Ipsum is therefore always free from repetition, injected humour?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>The standard chunk of Lorem Ipsum used since the 1500s is reproduced?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

function LinkBox({ href, src, title, alt }) {
    return (
        <a href={href} className="group w-full flex items-center gap-1 my-1 3xl:my-2">
            <span>
                <Image src={src} width={15} height={15} alt={alt} className="w-[10px] h-[auto] lg:w-[12px] 3xl:w-[14px] block" />
            </span>
            <span className="text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-[#1b1b1b] group-hover:text-base2 transition-color duration-300">{title}</span>
        </a>
    )
}
