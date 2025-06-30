import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog";
import CareerForm from "@/components/common/CareerForm";
import Image from "next/image";

export default function JobResultAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="text-[12px] 4xs:text-[14px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-bold text-white w-full max-4xs:max-w-[110px] h-[30px] 4xs:h-[35px] sm:h-[25px] lg:h-[25px] xl:h-[30px] 2xl:h-[35px] 3xl:h-[48px] flex items-center bg-base2 rounded-[10px] sm:rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[10px] sm:p-[4px] xl:p-[6px] 2xl:p-[8px] cursor-pointer transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]">
          <span className="pr-[4px] sm:px-[2px] lg:px-[4px] 2xl:px-[6px]">Apply Now</span>
          <Image
            src="/images/icon-careerBtn.svg"
            alt="careerBtn"
            width={30}
            height={30}
            className="w-[20px] 4xs:w-[25px] sm:w-[15px] lg:w-[15px] xl:w-[20px] 2xl:w-[25px] 3xl:w-[30px] h-auto aspect-4/4 block"
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="w-full max-4xs:min-w-[300px] max-sm:min-w-[320px] sm:max-w-[360px] md:max-w-[376px] lg:max-w-[420px] xl:max-w-[468px] 2xl:max-w-[576px] 3xl:max-w-[668px] mx-auto bg-[#dceafb] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_20px] 4xs:p-[20px_25px] lg:p-[20px_30px] xl:p-[30px_50px] 2xl:p-[40px_60px] 3xl:p-[50px_80px] relative z-0">
          <AlertDialogCancel className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] xl:top-[20px] 2xl:top-[25px] 3xl:top-[30px] right-[15px] xl:right-[20px] 2xl:right-[25px] 3xl:right-[30px] transition-color cursor-pointer hover:text-base2 items-center">
            Close
            <Image
              src="/images/modal-cancel.svg"
              alt="modal-cancel"
              width={20}
              height={20}
            />
          </AlertDialogCancel>
          <div className="w-full h-auto block">
            <div className="w-full mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
              <AlertDialogTitle className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-black font-bold flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                Make Your{" "}
                <span className="text-base2 font-bold">&nbsp;Move</span>
              </AlertDialogTitle>
              <div className="text-sm1">
                Upload Your Resume ; we&apos;ll connect when the right role
                opens up.
              </div>
            </div>
            <CareerForm />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
