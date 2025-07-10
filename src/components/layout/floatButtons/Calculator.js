"use client";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/custom-alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { serverMediaPath } from "@/constants/constants";

export default function FloatingCalculator({ icon, link }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Link
          href={link ? link : "/#calculator"}
          className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)] cursor-pointer"
        >
          <Image src={icon ? `${serverMediaPath}${icon}` : "/images/floating-calculator.svg"} alt="calculator" fill sizes="46px" />
        </Link>
      </AlertDialogTrigger>
    </AlertDialog>
  );
}
