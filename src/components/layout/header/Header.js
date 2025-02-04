"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem"
import MobileMenu from "./MobileMenu"
import styles from './Header.module.scss';

const navItems = [
  {
    label: "services",
    href: "/services",
    items: [
      { label: "service 1", href: "/services/1" },
      {
        label: "service 2",
        href: "/services/2",
        items: [
          { label: "service 2.1", href: "/services/2/1" },
          { label: "service 2.2", href: "/services/2/2" },
        ],
      },
      { label: "Service 3", href: "/services/3" },
    ],
  },
  {
    label: "about", href: "/about",
    items: [
      { label: "about 1", href: "/about/1" },
    ],
  },
  { label: "foreign exchange", href: "/foreignexchange", },
  {
    label: "investors", href: "/",
    items: [
      { label: "investor 1", href: "/" },
      { label: "investor 2", href: "/" }
    ]
  },
  {
    label: "careers", href: "/careers",
    items: [
      { label: "careers 1", href: "/" },
      { label: "careers 2", href: "/" }
    ]
  },
]

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Show header at the top of the page or when scrolling up
      setIsVisible(currentScrollPos < 10 || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AnimatePresence>
      <motion.nav
        className={styles.navbar}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className={styles.dflx}>
            <div className={styles.dflx_lft}>
              <Link href="/" className={styles.navbar__logo}>
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={146}
                  height={75}
                  priority
                />
              </Link>
            </div>
            <div className={styles.dflx_rgt}>
              <div className={styles.navbar_links}>
                {navItems.map((item) => (
                  <div key={item.label || item.href} className={styles.item}>
                    <NavItem {...item} />
                  </div>
                ))}
              </div>
              <div className={styles.navbar_infos}>
                <div className={styles.item}>
                  <Link href={"/"} className={styles.navbar_info}>
                  <span className={styles.icon}>
                    <Image src={"./images/icon-location.svg"} width={15} height={15} alt={"location"}></Image>
                  </span>
                  <span>
                  </Link>
                </div>
              </div>
              {/* <MobileMenu navItems={navItems} /> */}

              {/* {isMobile ? (
                <>
                  <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Mobile Menu"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  {renderNavLinks(true)}
                </>
              ) : (
                <>
                  {renderNavLinks()}
                  <Link
                    href="/contact"
                    className={styles.contact__btn}
                  >
                    Enquiry
                  </Link>
                </>
              )} */}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}