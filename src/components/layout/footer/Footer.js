import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        src="/icons/logo_lg.svg"
        alt="Logo"
        width={180}
        height={57}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Registered Office</p>
      <p>Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai – 400 080</p>
    </footer>
  );
}
