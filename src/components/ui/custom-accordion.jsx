"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import Image from "next/image"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("", className)}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group text-[12px] lg:text-[14px] xl-[16px] 2xl-[18px] 3xl:text-[20px] font-normal text-black text-left py-[10px] lg:py-[15px] 2xl:py-[20px] 3xl:py-[25px]",
          "group flex flex-1 items-start justify-between gap-4 transition-all outline-none hover:text-base2 focus-visible:none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>img]:rotate-180",
          className
        )}
        {...props}>
        {children}
        {/* close */}
        <Image
          src="/images/icon-accordion-close.svg"
          alt="accordion-close"
          width={30}
          height={30}
          className="w-[15px] h-auto aspect-4/4 lg:w-[20px] 3xl:w-[30px] pointer-events-none transition-transform duration-300 group-data-[state=open]:hidden"
        />
        <Image
          src="/images/icon-accordion-open.svg"
          alt="accordion-open"
          width={30}
          height={30}
          className="w-[15px] h-auto aspect-4/4 lg:w-[20px] 3xl:w-[30px] pointer-events-none transition-all group-data-[state=closed]:hidden"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
