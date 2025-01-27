"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  const renderNavLinks = (isMobileMenu = false) => (
    <div className={`
      ${styles.navbar__links} 
      ${isMobileMenu ? styles.mobile : ''}
      ${isMobileMenu && isMobileMenuOpen ? styles.open : ''}
    `}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => isMobileMenu && setIsMobileMenuOpen(false)}
          className={`
            ${styles.navbar__link}
            ${pathname === item.href ? styles.active : ''}
          `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

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
              {isMobile ? (
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
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}