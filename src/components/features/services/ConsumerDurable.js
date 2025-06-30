import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import {renderHtml} from "@/lib/utils/htmlParser"


export default function ConsumerDurable({
  page_title,
  image,
  loan_offer_title,
  loan_offer_description,
  loan_offer_button_text,
  loan_offer_button_link,
  image_alt
}) {
  return (
    <section className="w-full pt-[30px] 2xl:pt-[50px]  2xl:pb-[70px] md:pb-[40px] sm:pt-[30px] sm:pb-[30px] pb-[20px]">
      <div className="container">
        <div className="w-full sm:pb-[20px] lg:pb-[40px] 2xl:pb-[60px]">
          <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px] [&>span]:text-base2  [&>span]:font-bold">
            {page_title ? renderHtml(page_title) : ""}
          </h1>

          <div className="w-full sm:block hidden">
            <PageBreadcrumb />
          </div>
        </div>
        <div className="flex flex-wrap md:-mx-[15px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
          <div className="w-full md:w-[48%] 2xl:w-[46%] mb-[15px] lg:mb-0 md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
            <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden aspect-735/390 ">
              <Image
                src={image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}` : "/images/consumerImg.jpg"}
                alt={image_alt ? image_alt : "lifeintelImg"}
                width={735}
                height={390}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
              />
            </div>
          </div>
          <div className="w-full md:w-[52%] 2xl:w-[54%] md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
            <h2 className="text-title1 mb-[15px] 2xl:mb-[20px] font-bold [&>span]:text-base2  [&>span]:font-bold">
              {loan_offer_title ? renderHtml(loan_offer_title) : "Consumer Durable Loan"}
            </h2>

            <div className="text-sm1">
              {loan_offer_description
                ? renderHtml(loan_offer_description)
                : "Consumer Durable Loan is a type of loan that allows you to purchase consumer goods such as electronics, appliances, and furniture. It is designed to help you buy the products you need without having to pay for them upfront."}
            </div>
            <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px] mt-[15px] xl:mt-[30px] 2xl:mt-[40px]">
              <div>
                <Link
                  href={loan_offer_button_link ? loan_offer_button_link : "tel:+9072588911"}
                  className="btn btn-base2 min-w-[120px] lg:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[190px]"
                >
                  {loan_offer_button_text ? loan_offer_button_text : "Call Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
