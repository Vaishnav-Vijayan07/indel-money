import Image from "next/image";
import parse, { domToReact } from "html-react-parser";

const options = {
  replace: (node) => {
    if (node.name === "li") {
      return (
        <li className="3xl:text-[20px] 2xl:text-[15px] xl:text-[13px] text-[12px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px] last:mb-0">
          {domToReact(node.children, options)}
        </li>
      );
    }
    // Optional: strip <ul> class and use your own outside
    if (node.name === "ul") {
      return (
        <ul className="w-full bg-[#ECF4FF] rounded-[20px] xl:rounded-[24px] overflow-hidden px-[20px] xl:px-[25px] 2xl:px-[30px] py-[15px] mb-[15px] xl:mb-[20px] 2xl:mb-[35px]">
          {domToReact(node.children, options)}
        </ul>
      );
    }
  },
};

export default function ({ products, title, image, criteriaIcon, criteriaTitle, criteriaDescription, criteriaNote, isMobile }) {
  console.log("ProductCovered isMobile:", criteriaDescription);
  
  return (
    <section className="w-full relative sm:bg-[#C0DBFF] bg-[#E5F6FF] sm:rounded-[0] rounded-[20px] py-[20px] md:py-[30px]">
      {/* <div className="absolute hidden md:block bg-[#D4E6FF] left-0 top-0 w-[50%] h-full z-0"></div> */}
      <div className="container">
        <div className="flex flex-wrap">
          <div className="relative w-full flex flex-wrap flex-col-reverse lg:flex-row md:w-[calc(100%-285px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-590px)] sm:bg-[#fff] rounded-[36px] md:rounded-tl-[0] md:rounded-bl-[0] pt-[30px] xl:pt-[30px] 2xl:pt-[50px] 3xl:pt-[60px] sm:pr-[30px] 2xl:pr-[45px] 3xl:pr-[55px] pb-[30px] xl:pb-[40px] 2xl:pb-[50px] sm:pl-[20px] md:pl-0">
           <div className="absolute hidden md:block bg-[#fff] -left-[50%] top-0 w-[50%] h-full z-1"></div>
            <div className="group w-full max-lg:mt-[15px] lg:absolute lg:right-[20px] lg:2xl:right-[35px] lg:3xl:right-[55px] lg:bottom-[40px] lg:max-w-[350px] xl:max-w-[420px] 
             overflow-hidden h-auto">
              <Image
                src={image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}` : "/images/proCoveredImg.png"}
                alt="productCover"
                width={670}
                height={400}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
              />
            </div>
            <div className="w-full lg::max-w-[180px] lg:max-w-[210px] xl:max-w-[236px] 2xl:max-w-[325px] relative z-1 sm:mb-0 mb-[40px]">
              <h2 className="font-normal text-[#5e5959bf] leading-normal text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] [&>span]:text-base2 [&>span]:font-bold">
                {title ? parse(title) : "Product Covered"}
              </h2>

              <div className="relative z-1 flex flex-wrap sm:-my-[5px] 2xl:-my-[8px] sm:-mx-[10px] 2xl:-mx-[15px] bg-[#FFF] sm:bg-[#0000] sm:rounded-[0px] rounded-[15px] sm:py-0 py-[20px] sm:px-0 px-[20px]">
                {products?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="w-full 4xs:w-1/2 sm:w-full py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[15px] transition-transform duration-600 hover:ml-[5px]"
                  >
                    <ProductCoveredBox item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="w-full md:w-[285px] xl:w-[400px] 2xl:w-[500px] 3xl:w-[590px] pl-[25px] xl:pl-[45px] 2xl:pl-[55px] 3xl:pl-[75px] pb-[30px] xl:pb-[40px] 2xl:pb-[60px] pt-[30px] xl:pt-[40px] 2xl:pt-[70px] 3xl:pt-[90px] bg-[#C0DBFF] relative z-1 sm:block hidden">
              <div className="flex items-center mb-[10px] 2xl:mb-[20px]">
                <div className="w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[72px] h-[40px] xl:h-[50px] 2xl:h-[60px] 3xl:h-[72px] bg-[#EB0208] p-[5px] xl:p-[8px] 2xl:p-[12px] rounded-full border-3 2xl:border-5 border-white overflow-hidden">
                  <Image
                    src={criteriaIcon ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${criteriaIcon}` : "/images/criteriaIcon.svg"}
                    alt="lifeintelImg"
                    width={735}
                    height={390}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  />
                </div>
                <h2 className="text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] font-normal text-[#5e5959bf] pl-[15px] [&>span]:text-base2 [&>span]:font-bold">
                  {criteriaTitle ? parse(criteriaTitle) : "Eligibility Criteria"}
                </h2>
              </div>
              {parse(criteriaDescription, options)}

              <div className="text-sm1 font-medium max-w-[70%]">
                {criteriaNote
                  ? criteriaNote
                  : "Note: The eligibility criteria may vary based on the lender's policies and the applicant's financial profile."}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function ProductCoveredBox({ item }) {
  return (
    <div className="w-wfull">
      <div className="flex items-center">
        <div className="group w-[25px] 3xl:w-[25px] h-[16px] 2xl:h-[20px] 3xl:h-[25px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.icon}`}
            alt={item.title}
            width={25}
            height={25}
            className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
          />
        </div>
        <div className="text-[13px] 2xl:text-[14px] 3xl:text-[17px] leading-[1.4] font-normal text-[#151515] xl:w-[calc(100%-25px)] pl-[10px] 2xl:pl-[15px]">
          {item.title}
        </div>
      </div>
    </div>
  );
}
