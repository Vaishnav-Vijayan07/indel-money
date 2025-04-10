

"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const defaultTransformLabel = (label) => {
    return label
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

function BreadcrumbSeparatorImage({ variant }) {
    return (
        <svg className="w-[4px]! 2xl:w-[6px]! h-auto! block" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5.5L0.75 0.73686V10.2631L6 5.5Z" fill={variant === "white" ? "#93bffa" : "#17479e"} />
        </svg>
    )
}


export default function PageBreadcrumb({
    variant = 'default',
    homeElement = 'Home',
    activeItemClasses = `${variant === "white" ? "text-white" : "text-[#383838]"} text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[1] font-normal font-normal`,
    inactiveItemClasses = `${variant === "white" ? "text-white" : "text-[#383838]"} text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[1] font-normal hover:text-base2`,
    transformLabel = defaultTransformLabel,
}) {


    const pathname = usePathname();

    // Split the pathname into segments
    const segments = pathname
        .split('/')
        .filter((segment) => segment !== '');

    // Create the breadcrumb items
    const items = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const label = transformLabel(segment);
        const isLast = index === segments.length - 1;

        return {
            href,
            label,
            isLast,
        };
    });


    return (

        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/" className={inactiveItemClasses}>
                            {homeElement}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {items.length > 0 && (
                    <BreadcrumbSeparator>
                        <BreadcrumbSeparatorImage variant={variant} />
                    </BreadcrumbSeparator>
                )}
                {items.map((item, index) => (
                    <React.Fragment key={item.href}>
                        <BreadcrumbItem>

                            {item.isLast ? (
                                <BreadcrumbPage className={activeItemClasses}>{item.label}</BreadcrumbPage>

                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={item.href} className={`${variant === "white" ? "text-white" : "text-[#383838]"} "text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[1] font-normal hover:text-base2"`}>
                                        {item.label}
                                    </Link>
                                </BreadcrumbLink>
                            )}

                            {!item.isLast && (
                                <BreadcrumbSeparator>
                                    <BreadcrumbSeparatorImage variant={variant} />
                                </BreadcrumbSeparator>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}



