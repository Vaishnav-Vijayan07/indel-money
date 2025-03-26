import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // ✅ Correct import

export default function Gallery() {
    const images = [
        { src: "/images/gall01.jpg", alt: "1" },
        { src: "/images/gall02.jpg", alt: "2" },
        { src: "/images/gall05.jpg", alt: "6" },
        { src: "/images/gall06.jpg", alt: "5" },
        { src: "/images/gall03.jpg", alt: "3" },
        { src: "/images/gall04.jpg", alt: "4" },
    ];

    // Group images into sets of 3
    const slides = Array.from({ length: Math.ceil(images.length / 3) }, (_, i) =>
        images.slice(i * 3, i * 3 + 3)
    );

    return (
        <section className="w-full px-4 py-6">
            <div className="container mx-auto flex flex-wrap">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All Gallery</TabsTrigger>
                        <TabsTrigger value="photo">photo Gallery</TabsTrigger>
                        <TabsTrigger value="video">Video Gallery</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        {/* First Image (100% Width) */}
                                        <div className="flex flex-wrap w-full p-2 h-[40%]">
                                            {group.slice(0, 1).map((item, i) => (
                                                <div key={i} className="group rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    <Image
                                                        src={item.src}
                                                        width={800}
                                                        height={335}
                                                        alt={item.alt}
                                                        className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap w-full h-[60%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                    <TabsContent value="photo">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        {/* First Image (100% Width) */}
                                        <div className="flex flex-wrap w-full p-2 h-[40%]">
                                            {group.slice(0, 1).map((item, i) => (
                                                <div key={i} className="group rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    <Image
                                                        src={item.src}
                                                        width={800}
                                                        height={335}
                                                        alt={item.alt}
                                                        className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap w-full h-[60%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                    <TabsContent value="video">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        {/* First Image (100% Width) */}
                                        <div className="flex flex-wrap w-full p-2 h-[44%]">
                                            {group.slice(0, 1).map((item, i) => (
                                                <div key={i} className="group rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    <Image
                                                        src={item.src}
                                                        width={800}
                                                        height={335}
                                                        alt={item.alt}
                                                        className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap w-full h-[56%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05]"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>


            </div>
        </section>
    );
}
