// import ServiceForm from "../../../components/ServiceForm";
import Image from "next/image";

import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"


export default function HeroBanner({ styles }) {
  return (
    <section className={styles.MainBanner}>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="CarouselItem relative" key={index}>
              <Image
                src="/images/MainSlide1.webp"
                alt="Logo"
                width={1920}
                height={844}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              />
              <Card className="absolute top-0 left-0 w-full h-full bg-[#0000000]">
                <div className="container max-w-sm md:max-w-[1220px]">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <h2 className="text-3xl text-white">
                        <span className="text-3xl font-bold text-[#EE3824]">Indel Money:</span> Your trusted partner for a brighter future.
                      </h2>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
