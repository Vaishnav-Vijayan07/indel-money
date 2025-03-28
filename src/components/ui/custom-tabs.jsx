"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <div className="gallTab w-full">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
          "flex-wrap",
          className
        )}
        {...props}
      />
    </div>
  );
}


function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-[#17479E] bg-none inline-flex h-[calc(100%-1px)] text-sm xl:text-xs w-1/2 xl:w-1/3 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium transition-[color,box-shadow] focus-visible:ring-2 focus-visible:ring-[#17479E] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
        "aria-selected:bg-gradient-to-r aria-selected:from-[#17479E] aria-selected:to-[#C63B3B] aria-selected:text-white",
        "whitespace-inherit",
        className
      )}
      {...props}
    />
  );
}


function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
