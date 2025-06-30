"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}) {
  return (
    (<ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow]"
        // className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
        >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>)
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    (<ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none bg-[#e3e3e3] rounded-full",
        orientation === "vertical" &&
          "h-full w-[4px] lg:w-[8px] 2xl:w-[10px]",
        orientation === "horizontal" &&
          "h-[4px] lg:h-[8px] 2xl:h-[10px] flex-col",
        className
      )}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="w-[5px] lg:w-[10px] 2xl:w-[15px] bg-border bg-base1 relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>)
  );
}

export { ScrollArea, ScrollBar }
