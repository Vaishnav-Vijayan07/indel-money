"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Innovations({ pageContent }) {
  return (
    <section className="w-full 2xl:pt-[80px] 2xl:pb-[30px] md:pt-[30px] md:pb-[30px] pt-[40px] pb-[20px]">
      <div className="container">
        <div className="rounded-[36px] bg-[#CAE5F4] 2xl:px-[85px] lg:px-[45px] px-[30px] h-full w-full">
          <div className="flex flex-wrap relative  h-full w-full 2xl:py[60px] lg:py-[40px] py-[25px]">
            <div className="w-full sm:max-w-[calc(100%-176px)] lg:max-w-[calc(100%-268px)] xl:max-w-[calc(100%-320px)] 2xl:max-w-[calc(100%-376px)] 3xl:max-w-[calc(100%-400px)]">
              <div className="flex flex-wrap items-center mb-[15px] lg:mb[20px] 2xl:mb[30px]">
                <div className="w-full lg:w-[276px] 2xl:w-[376px] 3xl:w-[420px] lg:border-r-1 lg:border-r-[rgba(0,0,0,0.6)] h-full">
                  <div className="text-title1 max-w-9/10">
                    {/* Innovations and{" "}
                    <span className="text-base2 font-bold">Features</span> */}
                    {pageContent?.features_title}
                  </div>
                </div>
                <div className="2xl:w-[calc(100%-340px] xl:w-[calc(100%-350px] lg:w-[calc(100%-200px] xl:pl-[50px] lg:pl-[30px] max-lg:w-full max-lg:mt-3">
                  {/* <ul>
                    <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[14px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[3px]">
                      Mobile app
                    </li>
                    <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[14px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] mb-[3px]">
                      ⁠Door step assistance
                    </li>
                    <li className="2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[14px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[8px] before:h-[8px] ">
                      Paperless operation
                    </li>
                  </ul> */}
                  {pageContent?.features_sub_title}
                </div>
              </div>
              {/* content */}
              <p className="mb-[15px] lg:mb[20px] 2xl:mb[35px]">
                {/* There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable */}
                {pageContent?.features_description}
              </p>
              {/* download app */}

              <div className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#323232] font-bold mb-[5px] 2xl:mb-[10px]">
                Download our mobile application from:
              </div>
              <div className="flex flex-wrap gap-[4px] lg:gap-[6px] 2xl:gap-[8px]">
                <Link href={pageContent?.ios_download_link}>
                  <Image
                    src={"/images/app-download-1.svg"}
                    alt="downloadImg"
                    width={180}
                    height={60}
                    className="w-[80px] lg:w-[100px] xl:w-[120px] 2xl:w-[140px] 3xl:w-[180px] h-auto aspect-180/60"
                  />
                </Link>
                <Link href={pageContent?.android_download_link}>
                  <Image
                    src={"/images/PlayStore.webp"}
                    alt="downloadImg"
                    width={180}
                    height={60}
                    className="w-[80px] lg:w-[100px] xl:w-[120px] 2xl:w-[140px] 3xl:w-[180px] h-auto aspect-180/60"
                  />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full sm:max-w-[176px] lg:max-w-[268px] xl:max-w-[320px] 2xl:max-w-[376px] 3xl:max-w-[400px] absolute bottom-0 right-0 max-sm:hidden"
            >
              <Image
                src={"/images/app-1.png"}
                alt="app"
                width={460}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadBx({ src, href, alt }) {
  return (
    <Link href={href} className="w-full max-w-[100px] lg:max-w-[120px] 3xl:max-w-[180px] h-auto block">
      <Image src={src} alt={alt} width={180} height={60} className="w-full h-full object-cover" />
    </Link>
  );
}
