

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
} from "../ui/breadcrumb"
import Image from 'next/image';

const defaultTransformLabel = (label) => {
    return label
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};


export default function PageBreadcrumb({
    homeElement = 'Home',
    activeItemClasses = 'text-gray-500 font-medium',
    inactiveItemClasses = 'hover:text-base2',
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
                        <Image
                            src="/images/icon-breadcrumb.svg"
                            alt="breadcrumb"
                            width={11}
                            height={7}
                            className="w-[4px] lg:w-[6px]"
                        />
                    </BreadcrumbSeparator>
                )}
                {items.map((item, index) => (
                    <React.Fragment key={item.href}>
                        <BreadcrumbItem>

                            {item.isLast ? (
                                <BreadcrumbPage className={activeItemClasses}>{item.label}</BreadcrumbPage>

                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={item.href} className="hover:text-base2">
                                        {item.label}
                                    </Link>
                                </BreadcrumbLink>
                            )}

                            {!item.isLast && (
                                <BreadcrumbSeparator>
                                    <Image
                                        src="/images/icon-breadcrumb.svg"
                                        alt="breadcrumb"
                                        width={11}
                                        height={7}
                                        className="w-[4px] lg:w-[6px] 2xl:w-[10px]"
                                    />
                                </BreadcrumbSeparator>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
