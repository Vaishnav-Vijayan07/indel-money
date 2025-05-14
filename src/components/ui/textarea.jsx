import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "text-[12px] lg:text-[12px] 2xl-[14px] 3xl:text-[16px] border-input text-black",
        "w-full min-w-0 min-h-[60px] lg:min-h-[80px] 2xl:min-h-[120px] flex rounded-md border bg-transparent px-3 py-1",
        "placeholder:text-[#404040] border-input  focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content shadow-none transition-[color,box-shadow] outline-none focus-visible:none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />)
  );
}

export { Textarea }
