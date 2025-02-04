"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.scss"

function MobileMenuItem({ item }) {
    const [isOpen, setIsOpen] = useState(false)

    if (item.items) {
        return (
            <div>
                <button className={styles.navItem} onClick={() => setIsOpen(!isOpen)}>
                    {item.label}
                </button>
                {isOpen && (
                    <div className={styles.dropdown}>
                        {item.items.map((subItem) => (
                            <MobileMenuItem key={subItem.label || subItem.href} item={subItem} />
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <Link href={item.href} className={styles.navItem}>
            {item.label}
        </Link>
    )
}

export default function MobileMenu({ navItems }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
                <button className={styles.closeButton} onClick={toggleMenu}>
                    ×
                </button>
                {navItems.map((item) => (
                    <MobileMenuItem key={item.label || item.href} item={item} />
                ))}
            </nav>
        </>
    )
}

