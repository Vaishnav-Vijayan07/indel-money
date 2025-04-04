import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobNavMenu from "./MobNavMenu";

const socialmedias = [
  {
    href: "/",
    src: "/images/mob-icon-fb.svg",
    alt: "fb",
  },
  {
    href: "/",
    src: "/images/mob-icon-youtube.svg",
    alt: "youtube",
  },
  {
    href: "/",
    src: "/images/mob-icon-insta.svg",
    alt: "insta",
  },
  {
    href: "/",
    src: "/images/mob-icon-linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "/",
    src: "/images/mob-icon-x.svg",
    alt: "x",
  },
];

const quickactions = [
  {
    href: "tel:18004253990 ",
    src: "/images/mob-icon-call.svg",
    alt: "call",
  },
  {
    href: "/",
    src: "/images/mob-icon-location.svg",
    alt: "location",
  },
  {
    href: "/",
    src: "/images/mob-icon-appstore.svg",
    alt: "appstore",
  },
  {
    href: "/",
    src: "/images/mob-icon-playstore.svg",
    alt: "playstore",
  },
];

export default function MobHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Show header at the top of the page or when scrolling up
      setIsVisible(currentScrollPos < 10 || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white border-base1/10 border-b-1 fixed z-10 top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.20)]"
        style={{ height: "var(--header-y)" }}
      >
        <div className="w-full h-[30px] @sm:h-[40px] bg-gradient-to-l from-[#DB0619] to-[#4E2DAD] relative z-0 flex items-center">
          <Image
            src="/images/mob-header-bg.png"
            alt="mob-header-bg"
            fill
            className="object-cover -z-1"
          />
          <div className="container flex justify-between items-center">
            <div className="flex flex-wrap items-center gap-x-[15px] @sm:gap-x-[20px]">
              {socialmedias?.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[15px] h-auto aspect-square block transition-transform duration-300 hover:scale-105"
                  >
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
            <div className="flex flex-wrap items-center gap-x-[15px] @sm:gap-x-[20px]">
              {quickactions?.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[15px] h-auto aspect-square block transition-transform duration-300 hover:scale-105"
                  >
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
          </div>
        </div>
        <div className="w-full h-[calc(100%-30px)] @sm:h-[calc(100%-40px)] flex items-center">
          <div className="container">
            <div className="flex items-center">
              <div className="w-[60px] @sm:w-[80px]">
                <Link
                  href="/"
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/icons/logo_sm.svg"
                    alt="Logo"
                    width={145}
                    height={75}
                  />
                </Link>
              </div>
              <div className="w-[calc(100%-60px)] @sm:w-[calc(100%-80px)]">
                <div className="flex items-center justify-end gap-x-[15px] @sm:gap-x-[20px]">
                  <div>
                    <Link
                      href="/"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src="/images/mob-icon-search.svg"
                        alt="search"
                        width={18}
                        height={18}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src="/images/mob-icon-money.svg"
                        alt="money"
                        width={18}
                        height={18}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src="/images/mob-icon-saving.svg"
                        alt="saving"
                        width={18}
                        height={18}
                      />
                    </Link>
                  </div>
                  <div>
                    <MobNavMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
