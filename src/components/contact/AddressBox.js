import Image from "next/image";
import React from "react";
import LinkBox from "./LinkBox";

function AddressBox({ item }) {
  return (
    <div className="w-full h-auto max-sm:bg-gradient-to-tl max-sm:to-base1 max-sm:from-base2 sm:bg-[#dceafb] p-[20px]  4xs:p-[25px] sm:p-[15px_20px] lg:p-[30px_40px] 3xl:p-[48px_60px] rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px] overflow-hidden relative z-0">
      <Image src={"/images/contactbx-delmt.png"} alt="contactbx-delmt" fill className="object-cover scale-[1.05]" />
      <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-white sm:text-base1 font-bold mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
        {item.office_name}
      </div>
      <div className="text-sm1 text-white sm:text-black/80 mb-[15px] lg:mb-[10px] 2xl:mb-[15px]">{item.address}</div>
      {item.phone && <LinkBox href={`tel:${item.phone}`} src="/images/icon-call.svg" title={item.alternative_phone} alt="call" items={item.alternative_phone} />}
      {item.email && <LinkBox href={`mailto:${item.email}`} src="/images/icon-ft-email.svg" title={item.email} alt="mail" items={item.email} />}
    </div>
  );
}

export default AddressBox;
