import Image from "next/image";
import Link from "next/link";
import JobResultAlert from "./JobResultAlert";

export default function MobJobResultBox({ item }) {
  return (
    <div className="group w-full h-auto bg-white rounded-[10px] p-[15px] 4xs:p-[20px] shadow-[0_0_15px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#c7e0ff] hover:border-base1/05">
      <div className="text-[16px] font-bold leading-none text-black w-full block mb-[12px]">
        {item.job_title}
      </div>
      <div className="flex flex-wrap items-center gap-[6px_4px] 4xs:gap-[8px_6px] xs:gap-[10px]">
        <div>
          <div className="text-[12px] leading-none font-medium text-[#484877] w-fit h-auto bg-[#cedfff] rounded-[100px] flex items-center gap-[4px] p-[8px_10px]">
            <Image
              src={"/images/icon-location.svg"}
              alt="location"
              width={10}
              height={14}
            />
            {item.location}
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="w-[30px] h-auto aspect-square rounded-[100px] flex items-center justify-center bg-[#cedfff] hover:bg-[#c3d8ff]"
          >
            <Image
              src="/images/icon-share.svg"
              alt="share"
              width={18}
              height={18}
              className="w-[14px] h-auto aspect-4/4 block"
            />
          </Link>
        </div>
        <div className="max-4xs:w-full ml-auto">
          <JobResultAlert />
        </div>
      </div>
    </div>
  );
}
