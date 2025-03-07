import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-auto block bg-[#e6edf7] pt-[30px] lg:pt-[40px] xl:pt-[60px] 2xl:pt-[80px]">
      <div className="container">
        <div className="w-full h-auto block">
          <Image
            src="/images/icon-ft-logo.svg"
            alt="logo"
            width={360}
            height={57}
          />
        </div>
        <div className="w-full h-auto block">
          <div className="text-sm lg:text-lg 2xl:text-[22px]">Registered Office</div>
          <div className="text-sm lg:text-lg 2xl:text-[22px]">Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080</div>
        </div>
        <div className="w-full h-auto block">
          <div className="text-sm lg:text-[16px] 2xl:text-lg font-medium text-[#1b1b1b]">
            <Image
              src="/icons/logo-ft-call.svg"
              alt="call"
              width={16}
              height={16}
            />
            <Link href="tel:18004253990">1800 4253 990</Link>
          </div>
          <div className="text-sm lg:text-[16px] 2xl:text-lg font-medium text-[#1b1b1b]">
            <Image
              src="/icons/logo-ft-mail.svg"
              alt="mail"
              width={16}
              height={16}
            />
            <Link href="mailto:care@indelmoney.com">care@indelmoney.com</Link>
          </div>
        </div>
        <div className="w-full h-auto block">
        <div className="text-sm lg:text-[16px] 2xl:text-lg font-medium text-black">Subscribe News letter</div>
        from
        </div>


      </div>

      <Image
        src="/icons/logo_lg.svg"
        alt="Logo"
        width={180}
        height={57}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />
      <p>Registered Office</p>
      <p>Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080</p>
    </footer>
  );
}
