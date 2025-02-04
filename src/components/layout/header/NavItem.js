"use client"

import React, { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.scss"
import Dropdown from "./Dropdown"
import { usePathname } from "next/navigation"

export default function NavItem({ href, label, items }) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const handleMouseEnter = () => setIsOpen(true)
    const handleMouseLeave = () => setIsOpen(false)

    if (items) {
        return (
            <div className={` ${styles.navbar_link} ${styles.navbar_dropdown} ${pathname === href ? styles.active : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>{label}</span>
                {isOpen && <Dropdown items={items} />}
            </div>
        )
    }

    return (
        <Link href={href} className={`
            ${styles.navbar_link}
            ${pathname === href ? styles.active : ''}
          `}>
            <span>{label}</span>
        </Link>
    )
}

