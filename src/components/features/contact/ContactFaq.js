import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/custom-accordion"

const faqAccordion = [
    {
        id: '1',
        title: 'There are many variations of passages of Lorem Ipsum available?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
    },
    {
        id: '2',
        title: 'If you are going to use a passage of Lorem Ipsum, you need to be sure?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
    },
    {
        id: '3',
        title: 'All the Lorem Ipsum generators on the Internet tend to repeat?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
    },
    {
        id: '4',
        title: 'Lorem Ipsum is therefore always free from repetition, injected humour?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
    },
    {
        id: '5',
        title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced?',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
    },
];

const addressBox = [
    {
        title: 'Registered Office',
        address:
            'Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080',
        phone: '1800 4253 990',
        email: 'care@indelmoney.com',
    },
    {
        title: 'Corporate Office',
        address:
            'Indel Money Limited, Indel House, Changampuzhanagar, South Kalamassery P. O. Ernakulam Kerala - 682 033',
        phone: ['0484 6919999', '0484 2933990'],
        email: 'care@indelmoney.com',
    },
]


function LinkBox({ href, src, title, alt, items }) {
    return (
        <div className="group w-full flex items-center my-1 3xl:my-2">
            <span>
                <Image
                    src={src}
                    width={15}
                    height={15}
                    alt={alt}
                    className="w-[10px] h-[auto] lg:w-[12px] 3xl:w-[14px] block"
                />
            </span>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-[#1b1b1b] ml-[5px] lg:ml-[10px] 3xl:ml-[14px]">
                {Array.isArray(items) ? (
                    items.map((number, idx) => (
                        <span key={`phone-${idx}`}>
                            <a
                                href={`tel:${number}`}
                                aria-label={number}
                                className="hover:text-base2 transition-color duration-300"
                            >
                                {number}
                            </a>
                            {idx < items.length - 1 && ', '}
                        </span>
                    ))
                ) : (
                    <a
                        href={href}
                        aria-label={title}
                        className="hover:text-base2 transition-color duration-300"
                    >
                        {title}
                    </a>
                )}
            </p>
        </div>
    );
}

function AddressBox({ items }) {
    return (
        <div
            className="w-full h-auto bg-[#dceafb] p-[15px_20px] lg:p-[30px_40px] 3xl:p-[48px_60px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px] overflow-hidden">
            <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-base1 font-bold mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                {items.title}
            </div>
            <div className="text-sm-1 text-black/80 mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                {items.address}
            </div>
            <LinkBox
                href={`tel:${items.phone}`}
                src="/images/icon-call.svg"
                title={items.phone}
                alt="call"
                items={items.phone}
            />
            <LinkBox
                href={`mailto:${items.email}`}
                src="/images/icon-ft-email.svg"
                title={items.email}
                alt="mail"
                items={items.email}
            />
        </div>
    );
}

function FaqAccordion({ items }) {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
        >
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    value={`item-${item.id}`}
                    className="border-b border-black/25 [&:first-child]:border-t"
                >
                    <AccordionTrigger className="text-left">
                        {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="text-sm-1 text-black/75 [&>*:text-sm-1] [&>*:text-black/75]">
                            {item.description}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default function ContactFaq() {
    return (
        <section className="w-full block py-[30px_30px] sm:py-[40px_40px] lg:py-[80px_60px] 2xl:py-[100px_80px] bg-gradient-to-r to-[#fde7e7] from-transparent">
            <div className="container">
                <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] 2xl:-mx-[20px]">
                    <div className="w-full lg:w-[376px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] px-[10px] py-[10px] lg:py-0 lg:px-[15px] 2xl:px-[20px]">
                        {addressBox.map((item, index) => (
                            <div key={index} className="w-full py-[4px] lg:py-[6px] 2xl:py-[10px]">
                                <AddressBox items={item} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] px-[10px] py-[10px] lg:py-0 lg:px-[15px] 2xl:px-[20px]">
                        <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-black mb-[5px] lg:mb-[5px] 2xl:mb-[10px] lg:mt-[10px]">FAQ</div>
                        <div className="text-title1 mb-[15px] lg:mb-[20px] 2xl:mb-[25px]">
                            Frequently asked{' '}
                            <span className="text-base2 font-bold">Questions</span>
                        </div>
                        <FaqAccordion items={faqAccordion} />
                    </div>
                </div>
            </div>
        </section>
    )
}


