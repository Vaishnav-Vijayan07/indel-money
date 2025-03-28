import ContactBanner from "@/components/features/contact/ContactBanner";
import WriteIntel from "@/components/features/contact/WriteIntel";
import BranchLocator from "@/components/features/home/BranchLocator";
import ContactFaq from "@/components/features/contact/ContactFaq";

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
