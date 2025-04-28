import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/custom-sheet";
import Image from "next/image";
import Link from "next/link";

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
        <SheetHeader className="p-0">
          <SheetTitle className="hidden">Indel Money</SheetTitle>
          <SheetDescription>
            <div className="w-full h-[var(--header-y)] bg-white shadow-sm p-[15px]">
              <div className="flex justify-between items-center">
                <div className="w-[60px] 4xs:w-[80px]">
                  <Link
                    href="/"
                    className="block transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src="/icons/logo_sm.svg"
                      alt="Logo"
                      width={145}
                      height={75}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
