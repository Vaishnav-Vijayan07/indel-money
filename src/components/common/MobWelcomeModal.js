"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/custom-alert-dialog";

import { useState, useEffect } from "react";

const slides = [
  {
    src: "/images/welcome-1.jpg",
    alt: "welcome-1",
    title: "Gold Loans",
    description:
      "Need quick financing? Get the best rates with our secure gold loans.",
    link: "/",
    linkname: "Get a Gold Loan Today",
  },
  {
    src: "/images/welcome-2.jpg",
    alt: "welcome-1",
    title: "Other Services",
    description:
      "We offer a range of services tailored to your needs. Let us guide you.",
    link: "/",
    linkname: "Explore Our Services",
  },
  {
    src: "/images/welcome-3.jpg",
    alt: "welcome-1",
    title: "Career Opportunities",
    description:
      "Looking for a new opportunity? Explore our open positions and start your journey with us.",
    link: "/",
    linkname: "FIND YOUR DREAM JOB",
  },
  {
    src: "/images/welcome-4.jpg",
    alt: "welcome-1",
    title: "Quick pay",
    description:
      "efficient payment solution designed to make transactions faster and easier.",
    link: "/",
    linkname: "Make your payment",
  },
];

function WelcomeBox({ item, index }) {
  // const isActive = index === 0;
  return (
    <div className="w-full h-auto rounded-[10px] p-[10px] relative z-0 flex flex-wrap bg-[#dceafb] transition-all duration-300">
      <div className="group w-[100px] height-[115px] overflow-hidden rounded-[10px] relative z-0">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="w-[calc(100%-100px)] pl-[10px]">
        <div className="text-[14px] leading-none line-clamp-1 font-bold text-base1 mb-[5px] transition-all duration-300">
          {item.title}
        </div>
        <div className="text-[13px] leading-[1.3] line-clamp-3 font-normal text-black mb-[20px] transition-all duration-300">
          {item.description}
        </div>
        <Link
          href={item.link}
          className="group text-[12px] uppercase text-normal text-white w-full h-[27px] bg-base1 border-base1 flex items-center justify-center gap-[4px] rounded-[5px] border mt-auto transition-all duration-300"
        >
          {item.linkname}
          <svg
            width="5"
            height="9"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-[2px]"
          >
            <path
              d="M6.5 6.5L0.125 12.9952V0.00480938L6.5 6.5Z"
              fill="#EE3824"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function MobWelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if the user has seen the modal before using localStorage
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      // Initial delay
      const initialTimer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      // Set up a 10-minute interval (600,000 ms) to re-show the modal
      const intervalTimer = setInterval(() => {
        setIsOpen(true);
      }, 600000);

      // Cleanup timers on component unmount
      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalTimer);
      };
    }
  }, []);

  // Handle closing the modal and mark it as seen
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <div className="w-full min-w-[380px] mx-auto bg-white rounded-[15px] p-[25px_20px]">
          <AlertDialogCancel
            onClick={handleClose}
            className="focus:outline-0 flex gap-[4px] absolute z-0 top-[20px] right-[20px] transition-color cursor-pointer items-center"
          >
            <Image
              src="/images/icon-close.svg"
              alt="icon-close"
              width={10}
              height={10}
            />
          </AlertDialogCancel>
          <div className="flex flex-wrap gap-[30px] mb-[20px]">
            <div className="w-full max-w-[80px] h-auto inline-block">
              <Image
                src="/icons/logo_sm.svg"
                alt="logo"
                width={86}
                height={44}
                inert
              />
            </div>
            <div>
              <AlertDialogTitle className="text-[20px] text-base2 leading-none font-bold mt-[2px] mb-[4px]">
                Welcome!
              </AlertDialogTitle>
              <div className="text-[14px] leading-none font-normal text-[#1e1e1e]">
                What Brings You Here Today?
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-[4px]">
            {slides?.map((item, index) => (
              <div key={index} className="w-full p-[4px]">
                <WelcomeBox item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
