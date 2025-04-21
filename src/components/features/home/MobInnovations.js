import Image from "next/image";
import Link from "next/link";

function DownloadBx({ src, href, alt }) {
  return (
    <Link href={href} className="inline-block">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={38}
        className="aspect-120/38"
      />
    </Link>
  );
}

export default function MobInnovations() {
  return (
    <section className="w-full py-[50px_80px] overflow-hidden relative z-0 ">
      <div className="absolute -z-1 top-[68px] left-[40%] rotate-[-30deg]">
        <Image
          src="/images/innovations-1.png"
          alt="innovations"
          width={200}
          height={409}
          className="aspect-209/427"
        />
      </div>
      <div className="container">
        <div className="max-w-[160px]">
          <h3 className="text-title1 text-black mb-[220px]">
            Innovations &
            <span className="font-bold text-base2">&nbsp;Features</span>
          </h3>
          <div className="text-[13px] leading-[1.2] font-medium text-[#323232] mb-[15px]">
            Download our mobile application from:
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <DownloadBx
              href="#"
              src="/images/app-download-1.svg"
              alt="appStore"
            />
            <DownloadBx
              href="#"
              src="/images/app-download-2.svg"
              alt="playStore"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
