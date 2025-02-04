"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import styles from "./Header.module.scss"

export default function Dropdown({ items, isNested = false }) {
    const [openSubmenu, setOpenSubmenu] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenSubmenu(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleMouseEnter = (index) => {
        setOpenSubmenu(index)
    }

    const handleMouseLeave = () => {
        setOpenSubmenu(null)
    }

    return (
        <div
            className={`${styles.navbar_dropdown_items} ${isNested ? styles.nestedDropdown : ""}`}
            ref={dropdownRef}
            onMouseLeave={handleMouseLeave}
        >
            {items.map((item, index) => (
                <div key={index || item.href} onMouseEnter={() => handleMouseEnter(index)}>
                    {item.items ? (
                        <div className={styles.dropdownItem}>
                            {item.label}
                            {openSubmenu === index && <Dropdown items={item.items} isNested />}
                        </div>
                    ) : (
                        <Link href={item.href} className={styles.dropdownItem}>
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}

