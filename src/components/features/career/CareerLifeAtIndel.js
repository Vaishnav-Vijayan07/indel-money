import Link from "next/link";

export default function CareerLifeAtIndel() {
    return (
        <section className="w-full block py-[40px_20px] lg:py-[60px_30px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] relative z-0 after:content-[''] after-w-full after:h-[50%] after:absolute after:-z-1 after:bottom-0 after:left-0 after:right-0 after:block after:bg-gradient-to-r after:to-[#fde7e7] after:from-transparent">
            <div className="container">
                <div className="flex justify-between mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]">
                    <div>
                        <div className="text-title1">
                            Life at
                            <span className="font-bold text-base2">
                                {""}   Indel
                            </span>
                        </div>
                        <div className="text-sm-1">Indel is more than just a workplace; it&apos;s a community where innovation thrives, and individuals flourish. Here, you&apos;ll experience:</div>
                    </div>
                    <div>
                        <Link
                            href={"/"}
                            className="btn btn-base1"
                        >
                            VISIT GALLERY
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[(100%-((100%-calc(var(--container-x))/2))] ml-auto">
                <div>fsdfds</div>
            </div>
        </section>
    )
}
