"use client";
import dynamic from "next/dynamic";
import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import ContactFaq from "@/components/features/contact/ContactFaq";
import MobBranchLocator from "../../components/features/home/MobBranchLocator";

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
      <div className="hidden sm:block">
        <BranchLocator variant="contact" />
      </div>
      <div className="block sm:hidden">
        <MobBranchLocator />
      </div>
      <ContactFaq />
    </>
  );
}
