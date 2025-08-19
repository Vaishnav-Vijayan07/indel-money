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

export default function ({ criteriaIcon, criteriaTitle, criteriaDescription, criteriaNote }) {
  return (
    <div className="pt-[20px] pb-[40px]">
      <section className="w-full bg-[linear-gradient(156deg,_rgba(23,71,158,0.20)_6.47%,_rgba(198,59,59,0.20)_91.2%)] rounded-[28px] py-[25px] md:p-0">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center mb-[10px]">
              <div className="w-[30px] h-[30px] bg-[#EB0208] p-[2px] rounded-full border-3 2xl:border-5 border-white overflow-hidden">
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
            <div className="text-sm1 font-medium w-full mt-[18px]">
              {" "}
              {criteriaNote
                ? criteriaNote
                : "Note: The eligibility criteria may vary based on the lender's policies and the applicant's financial profile."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
