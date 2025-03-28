import PlaceholdersAndVanishInputDemo from "@/components/layout/footer/SubscribeForm";
import Image from "next/image";
import Link from "next/link";

const socialmedias = [
  {
    href: "/",
    src: "/images/icon-fb.svg",
    alt: "fb",
  },
  {
    href: "/",
    src: "/images/icon-youtube.svg",
    alt: "youtube",
  },
  {
    href: "/",
    src: "/images/icon-insta.svg",
    alt: "insta",
  },
  {
    href: "/",
    src: "/images/icon-linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "/",
    src: "/images/icon-x.svg",
    alt: "x",
  },
];
const navigations = [
  {
    title: "About",
    links: [
      { linkname: "About Indel Money", href: "/about" },
      { linkname: "Board of Directors", href: "#" },
      { linkname: "Life at Indel Money", href: "#" },
      { linkname: "Employee Testimonials", href: "#" },
      { linkname: "Different Shades of Indel", href: "/about/different-shades-of-indel" }
    ]
  },
  {
    title: "Investors",
    links: [
      { linkname: "Investors Reports", href: "#" },
      { linkname: "Ombudsman Scheme", href: "#" }
    ]
  },
  {
    title: "Product & Services",
    links: [
      { linkname: "MSME Loan", href: "#" },
      { linkname: "Consumer Durable Loans", href: "#" },
      { linkname: "Loan Against Property", href: "#" },
      { linkname: "Gold Loan Schemes", href: "#" },
      { linkname: "E-Connect", href: "#" }
    ]
  },
  {
    title: "Media",
    links: [
      { linkname: "News", href: "#" },
      { linkname: "Blog", href: "#" },
      { linkname: "Image Gallery", href: "#" },
      { linkname: "Video Gallery", href: "#" }
    ]
  },
  {
    title: "Policies",
    links: [
      { linkname: "Privacy Policy", href: "#" },
      { linkname: "Disclaimer", href: "#" },
      { linkname: "Mobile App Policy", href: "#" },
      { linkname: "Fair Practice Code", href: "#" },
      { linkname: "Terms & Conditions", href: "#" },
      { linkname: "KYC Policy", href: "#" },
      { linkname: "Privacy Policy", href: "#" },
      { linkname: "Disclaimer", href: "#" },
      { linkname: "Mobile App Policy", href: "#" },
      { linkname: "Fair Practice Code", href: "#" },
      { linkname: "Terms & Conditions", href: "#" },
      { linkname: "KYC Policy", href: "#" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { linkname: "Contact Us", href: "/contact" },
      { linkname: "Careers", href: "/career" },
      { linkname: "EMI Calculator", href: "#" },
      { linkname: "Downloads", href: "#" },
      { linkname: "KYC Policy", href: "#" }
    ]
  }
];


function ContactBox({ href, src, title, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 3xl:gap-2">
      <span>
        <Image src={src} width={36} height={36} alt={alt} className="w-[15px] lg:w-[20px] xl:w-[25px] 3xl:w-[30px] h-[auto] block" />
      </span>
      <span className="text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] font-medium group-hover:text-base2 transition-color duration-300">{title}</span>
    </a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-auto block bg-[#e6edf7] pt-[30px] lg:pt-[40px] xl:pt-[60px] 3xl:pt-[80px] pb-[15px] lg:pb-[20px] xl:pb-[30px] 3xl:pb-[40px]">
      <div className="container">
        <div className="flex flex-wrap mx-0 lg:-mx-[20px] xl:-mx-[30px] 3xl:-mx-[35px] mb-[20px] lg:mb-[30px] xl:mb-[40px] 3xl:mb-[60px]">
          <div className="w-full lg:w-3/10 py-[10px] lg:py-0 lg:px-[20px] xl:px-[30px] 3xl:px-[35px]">
            <div className="w-full h-auto block mb-4 xl:mb-6">
              <Image
                src="/images/logo-ft.svg"
                alt="logo"
                width={360}
                height={60}
                className="max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] 3xl:max-w-[320px] aspect-360/60"
              />
            </div>
            <div className="w-full h-auto block mb-2 xl:mb-4">
              <div className="text-footer-1 mb-2 2xl:mb-4">Registered Office</div>
              <div className="text-footer-2 leading-[1.3]">Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080</div>
            </div>
            <div className="w-full h-auto block mb-2 xl:mb-4">
              <div className="flex gap-1 lg:gap-2 3xl:gap-3 text-sm lg:text-[16px] 3xl:text-[20px] font-medium text-[#1b1b1b] my-1 3xl:my-2">
                <Image
                  src="/images/icon-ft-call.svg"
                  alt="call"
                  width={16}
                  height={16}
                  className="aspect-square"
                />
                <Link href="tel:18004253990" target="_blank" rel="noopener noreferrer" className="hover:text-base2 transition-color duration-300">1800 4253 990</Link>
              </div>
              <div className="flex gap-1 lg:gap-2 3xl:gap-3 text-sm lg:text-[16px] 3xl:text-[20px] font-medium text-[#1b1b1b] my-1 3xl:my-2">
                <Image
                  src="/images/icon-ft-email.svg"
                  alt="mail"
                  width={16}
                  height={16}
                  className="aspect-square"
                />
                <Link href="mailto:care@indelmoney.com" target="_blank" rel="noopener noreferrer" className="hover:text-base2 transition-color duration-300">care@indelmoney.com</Link>
              </div>
            </div>
            <div className="w-full h-auto block mb-2 lg:mb-4 xl:mb-8">
              <h2
                className="text-[14px] lg:text-[16px] 3xl:text-[18px] font-medium text-black mb-1 3xl:mb-2">
                Subscribe News letter
              </h2>
              <PlaceholdersAndVanishInputDemo />
            </div>
            <div className="w-full h-auto block">
              <div className="flex flex-wrap gap-[5px] lg:gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px]">
                <div>
                  <Link
                    href="/"
                    className="btn btn-base1 min-w-[100px] lg:min-w-[100px] xl:min-w-[110px] 3xl:min-w-[160px]"
                  >
                    E-Connect
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="btn btn-base2 min-w-[100px] lg:min-w-[100px] xl:min-w-[110px] 3xl:min-w-[160px]"
                  >
                    Indel Remit
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/10 py-[10px] lg:py-0 lg:px-[20px] xl:px-[30px] 3xl:px-[35px]">
            <div className="w-full h-auto columns-4">
              {navigations.map((item, index) => (
                <div key={index} className="break-inside-avoid-column [display:table] w-full h-auto mb-3 xl:mb-6">
                  <div className="text-footer-1">{item.title}</div>
                  <div className="w-100% max-w-[80px] lg:max-w-[100px] 3xl:max-w-[120px] flex h-auto mt-1 2xl:mt-2 mb-2 2xl:mb-4"><span className="w-4/10 h-[4px] bg-base1"></span><span className="w-6/10 h-[4px] bg-base2"></span></div>
                  {item.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="w-full mb-1 2xl:mb-1.5">
                      <Link href={link.href} className="text-footer-2 inline-block transition-color duration-300 hover:text-base2">
                        {link.linkname}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#c0dbff] rounded-[10px] 3xl:rounded-[20px] px-[15px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] 3xl:px-[70px] py-[10px] lg:py-[15px] xl:py-[20px] 3xl:py-[30px] flex items-center justify-center mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
          <div className="w-full h-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-y-[10px] gap-x-[10px] lg:gap-x-[15px] 2xl:gap-x-[20px] 3xl:gap-x-[30px]">
              <div>
                <div className="text-sm sm:text-md-[16px] lg:text-[20px] 3xl:text-[24px] font-medium text-black">Follow Us on:</div>
              </div>
              {socialmedias?.map((item, index) => (
                <div key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-[15px] xl:w-[20px] 3xl:w-[25px] h-auto aspect-square block transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={18}
                      height={36}
                      className="w-full h-full aspect-square object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
            <div>
              <ContactBox href="/branchlocator" src="/images/icon-map.svg" title="Branch Locator" alt="location" />
            </div>
            <div>
              <ContactBox href="tel:18004253990" src="/images/icon-call.svg" title="1800 4253 990" alt="call" />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap items-center justify-between">
          <div className="text-footer-2">© {currentYear} Indel Money. All Rights Reserved</div>
          <div className="text-footer-2">CIN: U65990MH1986PLC040897</div>
          <div className="text-footer-2 flex gap-1">Designed By:
            <a href={"https:www.intersmart.com/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/images/intersmart.svg"}
                alt={"intersmart"}
                width={104}
                height={16}
                className="aspect-104/16 inline"
              />
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
}



