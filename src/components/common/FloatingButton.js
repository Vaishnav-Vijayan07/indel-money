import Image from "next/image";
import Link from "next/link";
import FloatingSearch from "../layout/floatButtons/Search";
import { serverMediaPath } from "@/constants/constants";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog";
import GoldLoanForm from "./GoldLoanForm";

const fetchGoldTypes = async () => {
  try {
    const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/gold-types`);
    if (data.success) {
      return data.data?.map((type) => ({
        label: type.gold_type_name,
        value: type.id,
      }));
    } else {
      toast.error("Failed to fetch gold types!");
      return [];
    }
  } catch (error) {
    toast.error("gold types fetching failed!");
  }
};

const fetchGoldCaratTypes = async () => {
  try {
    const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/gold-carat-types`);
    if (data.success) {
      return data.data?.map((type) => ({
        label: type.name,
        value: type.id,
      }));
    } else {
      toast.error("Failed to fetch gold carat types!");
      return [];
    }
  } catch (error) {
    toast.error("gold carat fetching failed!");
  }
};

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

function FloatingCalculator() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)] cursor-pointer">
          <Image src={"/images/floating-calculator.svg"} alt="calculator" fill sizes="46px" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="w-full min-w-[340px] sm:min-w-[360px] md:min-w-[376px] lg:min-w-[420px] xl:min-w-[468px] 2xl:min-w-[576px] 3xl:min-w-[668px] mx-auto bg-[#dceafb] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_25px] lg:p-[20px_30px] xl:p-[30px_50px] 2xl:p-[40px_60px] 3xl:p-[50px_80px] relative z-0">
          <AlertDialogCancel className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] xl:top-[20px] 2xl:top-[25px] 3xl:top-[30px] right-[15px] xl:right-[20px] 2xl:right-[25px] 3xl:right-[30px] transition-color cursor-pointer hover:text-base2">
            Close
            <Image src="/images/modal-cancel.svg" alt="modal-cancel" width={20} height={20} />
          </AlertDialogCancel>
          <div className="w-full h-auto block">
            <div className="w-full mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
              <AlertDialogTitle className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-black font-bold flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                Gold Loan <span className="text-base2 font-bold">&nbsp;Calculator</span>
              </AlertDialogTitle>
            </div>
            <GoldLoanForm />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
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
            <Image
              src={button?.icon ? `${serverMediaPath}${button?.icon}` : "/images/floating-call.svg"}
              alt="call"
              fill
              sizes="46px"
            />
          </Link>
        </div>
      ))}

      <div>
        <FloatingCalculator />
      </div>
    </div>
  );
}
