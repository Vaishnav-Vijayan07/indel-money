import Image from "next/image";
import Link from "next/link";

export default function NoContents() {
    return (
        <div className="flex h-screen items-center justify-center flex-col py-[30px] xl:py-[40px] 2xl:py-[90px]">
            <div className="m-auto">
                <div className="relative group w-full h-fit max-w-[300px] md:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[600px] 3xl:max-w-[800px] 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden aspect-800/480 m-auto">
                    <div className="absolute left-0 top-0 w-full h-auto sm:hidden block">
                        <Image
                            src={"/images/404Elemnt.png"}
                            alt="404-image"
                            width={382}
                            height={145}
                            className="w-full h-full object-contain transition-transform duration-600"
                        />
                    </div>
                    <Image
                        src={"/images/404Img.png"}
                        alt="404-image"
                        width={800}
                        height={480}
                        className="w-full h-full object-contain transition-transform duration-600"
                    />
                </div>
                <h1 className="text-title1 mb-[15px] md:mb-[20px] xl:mb-[30px] 2xl:mb-[40px] font-bold mt-[30px] 2xl:mt-[60px] text-center">Contents Not Found</h1>
            </div>
        </div>
    );
}