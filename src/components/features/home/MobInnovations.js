import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

function DownloadBx({ src, href, alt }) {
  return (
    <Link href={href} className="inline-block">
      <Image src={src} alt={alt} width={120} height={38} className="aspect-120/38" />
    </Link>
  );
}

export default function MobInnovations({ pageContent }) {

  return (
    <section className="w-full py-[50px_80px] overflow-hidden relative z-0 ">
      <div className="right-[0%] m-auto w-fit">
        <Image
          src={
            pageContent?.mobile_app_image_url
              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${pageContent?.mobile_app_image_url}`
              : "/images/innovations-1.png"
          }
          alt="innovations"
          width={200}
          height={409}
          className="aspect-209/427"
        />
      </div>
      <div className="container">
        <div className="w-fit m-auto mt-[20px]">
          <h3 className="text-title1 text-[#5e5959bf] mb-[20px] [&>span]:text-base2 [&>span]:font-bold">
            {pageContent?.features_title ? parse(pageContent?.features_title) : ""}
          </h3>
          <div className="text-[13px] text-center leading-[1.2] font-medium text-[#5e5959bf] mb-[15px]">
            Download our mobile application from:
          </div>
          <div className="flex flex-wrap justify-center gap-[10px]">
            <DownloadBx href={pageContent?.ios_download_link || "#"} src="/images/app-download-1.svg" alt="appStore" />
            <DownloadBx href={pageContent?.android_download_link || "#"} src="/images/app-download-2.svg" alt="playStore" />
          </div>
        </div>
      </div>
    </section>
  );
}
