import Image from "next/image";
import Link from "next/link";

export default function IndelRemit({ remit_section_description, remit_section_title, image, remit_section_button_link, remit_section_button_title }) {
  return (
    <section className="relative z-1 w-full pt-[25 px] lg:pt-[40px] 2xl:pt-[30px] pb-[30px] xl:pb-[40px] 2xl:pb-[90px]">
      <div className="container">
        <div className="relative w-full bg-[#CAE5F4] flex flex-wrap rounded-[36px] overflow-hidden lg:flex-row flex-col-reverse">
          <div className="group h-full lg:h-auto w-full lg:w-[400px] xl:w-[470px] 2xl:w-[700px] overflow-hidden z-1">
            <Image
              src={image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}` : "/images/remit01.jpg"}
              alt="money-deal"
              width={700}
              height={475}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
            />
          </div>
          <div className="flex flex-wrap content-between w-full lg:w-[calc(100%-400px)] xl:w-[calc(100%-470px)] 2xl:w-[calc(100%-700px)] p-[25px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[55px]">
            <div className="w-full">
              <div className="w-full font-bold leading-none text-base1 text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] mb-[15px]">
                {remit_section_title || "Indel Remit"}
              </div>
              <div
                className="[&>p]:text-sm1 [&>p]:line-clamp-4 [&>p]:mb-[10px] [&>p:nth-of-type(2)]:mb-[20px] xl:[&>p:nth-of-type(2)]:mb-[25px] 2xl:[&>p:nth-of-type(2)]:mb-[35px] [&>p:nth-of-type(3)]:line-clamp-5"
                dangerouslySetInnerHTML={{ __html: remit_section_description || "" }}
              />
              {/* <div className="[&>p]:text-sm1 [&>p]:line-clamp-4 [&>p]:mb-[10px] " dangerouslySetInnerHTML={{ __html: remit_section_description || "" }} />
              <p className="text-sm1 line-clamp-4 mb-[20px] xl:mb-[25px] 2xl:mb-[35px]">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
              <p className="text-sm1 line-clamp-5">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on
                the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </p> */}
            </div>
            <Link
              href={remit_section_button_link || "/loan-against-property/indel-remit"}
              className="group w-full text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal flex items-center leading-none hover:text-base2 transition-color duration-300 mt-[20px]"
            >
              {(remit_section_button_title).toUpperCase() || "Learn More"}
              <Image src="/images/icon-right.svg" width={7} height={13} alt="right" className="ml-1 lg:ml-2 group-hover:ml-[15px] duration-600" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
