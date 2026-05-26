import Image from "next/image";

function PartnerLogo({ image, alt }) {
  return (
    <div className="w-full h-full aspect-5/3 flex justify-center items-center border-[1px] border-solid border-[rgba(0,0,0,0.2)] rounded-[10px] 4xs:rounded-[16px] p-[6px] 3xs:p-[10px] sm:p-[15px] lg:p-[20px] 2xl:p-[25px] transition-border hover:border-base2">
      <Image
        src={image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}` : "/images/icon-aside-dropdown.svg"}
        alt={alt || "image"}
        width="200"
        height="100"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

export default PartnerLogo;
