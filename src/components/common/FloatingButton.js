import Image from "next/image";
import Link from "next/link";
import FloatingCalculator from "../layout/floatButtons/Calculator";
import FloatingSearch from "../layout/floatButtons/Search";
import { serverMediaPath } from "@/constants/constants";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/float-buttons`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { buttons: result.data.buttons, error: null };
    }
    return { buttons: null, error: result.message };
  } catch (error) {
    return { buttons: null, error: "Failed to fetch header data" };
  }
}

export default async function FloatingButton() {
  const { buttons, error } = await fetchData();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-sm:hidden flex flex-wrap flex-col gap-[4px] lg:gap-[6px] 2xl:gap-[10px] fixed z-4 top-[50%] right-[40px] translate-y-[-50%]">
      {(buttons || [])?.map((button) => (
        <div key={button?.id}>
          <Link
            href={button?.link ? button?.link : "/"}
            className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
          >
            <Image src={button?.icon ? `${serverMediaPath}${button?.icon}` : "/images/floating-call.svg"} alt="call" fill sizes="46px" />
          </Link>
        </div>
      ))}
      {/* <div>
        <FloatingCalculator />
      </div> */}
      {/* <div>
        <FloatingSearch />
      </div> */}
    </div>
    // <div className="max-sm:hidden flex flex-wrap flex-col gap-[4px] lg:gap-[6px] 2xl:gap-[10px] fixed z-4 top-[50%] right-[40px] translate-y-[-50%]">
    //   <div>
    //     <Link
    //       href={"/"}
    //       className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
    //     >
    //       <Image src={"/images/floating-call.svg"} alt="call" fill sizes="46px" />
    //     </Link>
    //   </div>
    //   <div>
    //     <Link
    //       href={"/"}
    //       className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
    //     >
    //       <Image src={"/images/floating-whatsapp.svg"} alt="whatsapp" fill sizes="46px" />
    //     </Link>
    //   </div>
    //   <div>
    //     <Link
    //       href={"/"}
    //       className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
    //     >
    //       <Image src={"/images/floating-mail.svg"} alt="mail" fill sizes="46px" />
    //     </Link>
    //   </div>
    //   <div>
    //     <FloatingCalculator />
    //   </div>
    //   <div>
    //     <FloatingSearch />
    //   </div>
    // </div>
  );
}
