import * as React from "react"

import { cn } from "../../lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "text-[12px] lg:text-[12px] 2xl-[14px] 3xl:text-[16px] border-input text-black",
        "w-full min-w-0 h-[30px] xl:h-[40px] 2xl:h-[44px] 3xl:h-[48px] flex rounded-md border bg-transparent px-3 py-1",
        "file:text-foreground placeholder:text-[#404040] selection:bg-primary selection:text-primary-foreground shadow-none transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:none",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />)
  );
}

export { Input }
