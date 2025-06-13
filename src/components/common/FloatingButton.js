"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import GoldLoanForm from "./GoldLoanForm";
import { useRouter } from "next/navigation";

function FloatingCalculator({ scrollTargetId, router }) {
  const handleClick = () => {
    if (router.pathname !== "/") {
      router.push(`/#${scrollTargetId}`);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(scrollTargetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          onClick={handleClick}
          className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)] cursor-pointer"
        >
          <Image src={"/images/floating-calculator.svg"} alt="calculator" fill sizes="46px" />
        </div>
      </AlertDialogTrigger>
    </AlertDialog>
  );
}

function FloatingSearch() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)] cursor-pointer">
          <Image src={"/images/floating-search.svg"} alt="search" fill sizes="46px" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="w-full min-w-[276px] sm:min-w-[360px] md:min-w-[376px] lg:min-w-[420px] xl:min-w-[468px] 2xl:min-w-[576px] 3xl:min-w-[668px] mx-auto bg-[#dceafb] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_20px] lg:p-[20px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px] 3xl:p-[40px_60px] relative z-0">
          <AlertDialogCancel className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] xl:top-[20px] 2xl:top-[25px] 3xl:top-[30px] right-[15px] xl:right-[20px] 2xl:right-[25px] 3xl:right-[30px] transition-color cursor-pointer hover:text-base2 items-center">
            Close
            <Image src="/images/modal-cancel.svg" alt="modal-cancel" width={20} height={20} />
          </AlertDialogCancel>
          <div className="w-full h-auto block">
            <AlertDialogTitle className="sr-only">search</AlertDialogTitle>
            <Command className="w-full py-[20px]">
              <CommandInput placeholder="Type to search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup className="text-[12px] lg:text-[12px] 2xl:text-[14px] font-normal" heading="Suggestions">
                  {/* <div className="overflow-y-auto h-[176px] lg:h-[220px] 2xl:h-[268px]"> */}
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                  {/* </div> */}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function FloatingButton() {
  const router = useRouter();
  return (
    <div className="max-sm:hidden flex flex-wrap flex-col gap-[4px] lg:gap-[6px] 2xl:gap-[10px] fixed z-4 top-[50%] right-[40px] translate-y-[-50%]">
      <div>
        <Link
          href="tel:+911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
        >
          <Image src={"/images/floating-call.svg"} alt="call" fill sizes="46px" />
        </Link>
      </div>
      <div>
        <Link
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
        >
          <Image src={"/images/floating-whatsapp.svg"} alt="whatsapp" fill sizes="46px" />
        </Link>
      </div>
      <div>
        <Link
          href="mailto:info@example.com"
          className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
        >
          <Image src={"/images/floating-mail.svg"} alt="mail" fill sizes="46px" />
        </Link>
      </div>
      <div>
        <FloatingCalculator scrollTargetId="calculator" router={router} />
      </div>
      {/* <div>
        <FloatingSearch />
      </div> */}
    </div>
  );
}
