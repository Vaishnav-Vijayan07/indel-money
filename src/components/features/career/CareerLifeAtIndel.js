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
        <section className="w-full block py-[20px_20px] lg:py-[40px_30px] 2xl:py-[60px_40px] 3xl:py-[80px_50px] relative z-0">
            <div className="container">
                <div className="flex items-center justify-between mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
                    <div className="lg:max-w-[320px] xl:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[576px]">
                        <div className="text-title1 font-bold mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
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
                            className="btn btn-base2 min-w-[100px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] 3xl:min-w-[180px]"
                        >
                            VISIT GALLERY
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pl-[var(--container-padding)] ml-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[376px] xl:w-[420px] 2xl:w-[520px] 3xl:w-[676px]">
                        <div className="w-full h-full p-[20x_15px] lg:p-[30px_20px] xl:p-[40px_30px] 2xl:p-[60px_40px] 3xl:p-[80px_60px] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] bg-linear-to-b from-transparent to-white relative z-0 overflow-hidden after:content-[''] after:absolute after:-z-1 after:inset-0 after:opacity-50 after:block after:bg-linear-to-b after:from-base1 after:to-base2 after:pointer-events-none flex items-center">
                            <Image
                                src="/images/careerLifeAtIndel-bg.jpg"
                                alt="careerLifeAtIndel-bg"
                                fill
                                sizes="676px"
                                className="opacity-5 pointer-events-none"
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
                    <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-676px)] px-[4px] lg:px-[6px] 2xl:px-[10px]">
                        <div className="flex flex-wrap -my-[4px] lg:-my-[6px] 2xl:-my-[10px]">
                            {/* First div: items 0,1 */}
                            <div className="w-[30%]">
                                {careerLifeAtIndelImages?.slice(0, 2).map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="w-full h-[140px] lg:h-[220px] 2xl:h-[240px] 3xl:h-[320px] [&:nth-child(2)]:h-[180px] lg:[&:nth-child(2)]:h-[240px] 2xl:[&:nth-child(2)]:h-[320px] 3xl:[&:nth-child(2)]:h-[360px] p-[4px] lg:p-[6px] 2xl:p-[10px]"
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
                                        className="w-full h-[140px] lg:h-[160px] 2xl:h-[200px] 3xl:h-[240px] [&:nth-child(2)]:h-[220px] lg:[&:nth-child(2)]:h-[300px] 2xl:[&:nth-child(2)]:h-[360px] 3xl:[&:nth-child(2)]:h-[440px] p-[4px] lg:p-[6px] 2xl:p-[10px]"
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
                                        className="w-full h-[360px] lg:h-[460px] 2xl:h-[560px] 3xl:h-[680px] p-[4px] lg:p-[6px] 2xl:p-[10px]"
                                    >
                                        <ImageBox item={careerLifeAtIndelImages[4]} />
                                    </div>
                                </div>
                            )}

                            {/* Items > 4: separate divs */}
                            {careerLifeAtIndelImages?.slice(5).map((item) => (
                                <div key={item.id} className="w-[25%]">
                                    <div className="w-full h-[140px] lg:h-[180px] 2xl:h-[200px] 3xl:h-[240px] p-[4px] lg:p-[6px] 2xl:p-[10px]">
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
