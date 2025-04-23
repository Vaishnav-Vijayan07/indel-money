import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function MobNavMenu() {
  return (
    <Sheet>
      <SheetTrigger className="outline-0">
        <div className="w-[30px] @sm:w-[38px] h-[30px] @sm:h-[38px] bg-base2 rounded-[4px] flex items-center justify-center">
          <Image
            src="/images/mob-navMenuIcon.svg"
            alt="nav"
            width={16}
            height={12}
          />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Under construction?</SheetTitle>
          <SheetDescription>
            Design under construction
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
