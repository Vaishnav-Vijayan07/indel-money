"use client";
import dynamic from "next/dynamic";
import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import ContactFaq from "@/components/features/contact/ContactFaq";

const BranchLocator = dynamic(
  () => import("@/components/features/home/BranchLocator"),
  {
    ssr: false,
  }
);

export default function Contact() {
  return (
    <>
      <ContactBanner />
      <WriteIntel />
      <BranchLocator variant="contact" />
      <ContactFaq />
    </>
  );
}
