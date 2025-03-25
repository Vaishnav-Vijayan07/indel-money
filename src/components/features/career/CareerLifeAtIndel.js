import Image from "next/image";
import Link from "next/link";
import styles from "./Career.module.css";

const careerLifeAtIndelImages = [
    {
        id: 0,
        src: "/images/careerLifeAtIndel-1.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 1,
        src: "/images/careerLifeAtIndel-2.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 2,
        src: "/images/careerLifeAtIndel-3.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 3,
        src: "/images/careerLifeAtIndel-4.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 4,
        src: "/images/careerLifeAtIndel-5.jpg",
        alt: "careerLifeAtIndel",
    },
];

function ImageBox({ item }) {
    return (
        <div
            className="group w-full h-full overflow-hidden rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] relative z-0"
        >
            <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="320px"
                className="group-hover:scale-105 object-cover transition-transform duration-300"
            />
        </div>
    );
}

export default function CareerLifeAtIndel() {

    return (
        <section className="w-full block py-[40px_20px] lg:py-[60px_30px] 2xl:py-[60px_40px] 3xl:py-[80px_50px] relative z-0">
            <div className="container">
                <div className="flex items-center justify-between mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
                    <div className="lg:max-w-[320px] xl:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[576px]">
                        <div className="text-title1 mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
                            Life at
                            <span className="font-bold text-base2">
                                {""}   Indel
                            </span>
                        </div>
                        <div className="text-sm-1 ">Indel is more than just a workplace; it&apos;s a community where innovation thrives, and individuals flourish. Here, you&apos;ll experience:</div>
                    </div>
                    <div>
                        <Link
                            href={"/"}
                            className="btn btn-base2 min-w-[100px] lg:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[180px]"
                        >
                            VISIT GALLERY
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pl-[var(--container-padding)] ml-auto">
                <div className="flex flex-wrap">
                    <div className="xl:w-[676px] 2xl:w-[676px] 3xl:w-[676px]">
                        <div className="w-full h-full p-[30x_20px] lg:p-[40px_40px] xl:p-[60px_60px] 2xl:p-[80px_60px] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] bg-linear-to-b from-transparent to-white relative z-0 overflow-hidden after:content-[''] after:absolute after:-z-1 after:inset-0 after:opacity-70 after:block after:bg-linear-to-b after:from-base1 after:to-base2 after:pointer-events-none">
                            <Image
                                src="/images/careerLifeAtIndel-bg.jpg"
                                alt="careerLifeAtIndel-bg"
                                fill
                                sizes="676px"
                                className="opacity-6 pointer-events-none"
                            />
                            <div className={styles.editor}>
                                <ul>
                                    <li>
                                        <b>A Culture of Excellence: </b>Immerse yourself in a culture that values hard work, creativity, and a relentless pursuit of excellence.
                                    </li>
                                    <li>
                                        <b>Empowering Opportunities: </b>Explore diverse career paths and receive continuous learning and development opportunities.
                                    </li>
                                    <li>
                                        <b>Work-Life Harmony: </b>Balance your professional and personal life with flexible work
                                    </li>
                                    <li>
                                        <b>Social Events and Celebrations: </b>Participate in a range of social events and celebrations that foster camaraderie and team spirit.
                                    </li>
                                    <li>
                                        <b>Recognition and Rewards: </b>Be recognized and rewarded for your contributions through various incentive programs and accolades.
                                    </li>
                                    <li>
                                        <b>Social Events and Celebrations: </b>Participate in a range of social events and celebrations that foster camaraderie and team spirit.
                                    </li>
                                </ul>
                                <p>Join the Indel family and experience a fulfilling and rewarding career journey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[calc(100%-676px)] 2xl:w-[calc(100%-676px)] 3xl:w-[calc(100%-676px)] px-[5px] lg:px-[10px]">
                        <div className="flex flex-wrap -my-[5px] lg:-my-[10px]">
                            {/* First div: items 0,1 */}
                            <div className="w-[30%]">
                                {careerLifeAtIndelImages?.slice(0, 2).map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="w-full h-[320px] [&:nth-child(2)]:h-[360px] p-[5px] lg:p-[10px]"
                                    >
                                        <ImageBox item={item} />
                                    </div>
                                ))}
                            </div>

                            {/* Second div: items 2,3 */}
                            <div className="w-[35%]">
                                {careerLifeAtIndelImages?.slice(2, 4).map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="w-full h-[240px] [&:nth-child(2)]:h-[440px] p-[5px] lg:p-[10px]"
                                    >
                                        <ImageBox item={item} />
                                    </div>
                                ))}
                            </div>

                            {/* Third div: item 4 */}
                            {careerLifeAtIndelImages?.length > 4 && (
                                <div className="w-[35%]">
                                    <div
                                        key={careerLifeAtIndelImages[4].id}
                                        className="w-full h-[680px] p-[5px] lg:p-[10px]"
                                    >
                                        <ImageBox item={careerLifeAtIndelImages[4]} />
                                    </div>
                                </div>
                            )}

                            {/* Items > 4: separate divs */}
                            {careerLifeAtIndelImages?.slice(5).map((item) => (
                                <div key={item.id} className="w-[25%]">
                                    <div className="w-full h-[240px] p-[5px] lg:p-[10px]">
                                        <ImageBox item={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
