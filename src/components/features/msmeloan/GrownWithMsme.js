"use client";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "@/lib/api/axios";

export default function FAQ({ title, description, type = "msme" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch FAQs based on type
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/web/faq?type=${type}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.data;

        if (result.status === "success") {
          setFaqs(result?.faqs || []);
        } else {
          throw new Error("Failed to fetch FAQs");
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [type]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-[30px] sm:py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] max-sm:bg-[#F0FAFF]">
      <div className="container">
        <div className="flex flex-wrap lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[40px]">
          <div className="w-full lg:w-[40%] 2xl:w-[40%] lg:border-r lg:border-r-[rgba(23,71,158,0.26)] pb-[30px] lg:pb-[0] lg:px-[15px] xl:px-[20px] 2xl:px-[40px] sm:block hidden">
            <div className="w-full">
              <h2 className="text-title1 mb-[20px] 2xl:mb-[30px] [&>span]:text-base2 [&>span]:font-bold">{parse(title)}</h2>
              <div className="text-sm1">{parse(description)}</div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] 2xl:w-[60%] lg:px-[15px] xl:px-[20px] 2xl:px-[40px]">
            <div className="contentBx w-full">
              <h3 className="font-bold text-black mb-2 xl:text-[20px] lg:text-[18px] text-[16px] uppercase">FAQ</h3>
              <div className="flex items-center justify-between mb-5 pb-[20px] border-b-1 border-[rgba(0,0,0,0.68)]">
                <h3 className="text-title1 text-black">
                  Frequently asked <span className="text-base2 font-bold">&nbsp;Questions</span>
                </h3>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <div className="text-gray-600">Loading FAQs...</div>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <div className="text-red-500">Error loading FAQs: {error}</div>
                </div>
              ) : faqs?.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-600">No FAQs available for this section.</div>
                </div>
              ) : (
                faqs?.map((faq, index) => (
                  <div
                    key={faq.id || index}
                    className="border-b border-[rgba(0,0,0,0.26)] 2xl:pt-[15px] pt-[10px] pb-[5px] 2xl:pb-[10px]"
                  >
                    <button
                      className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline  transition-all duration-300 pb-[10px]"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="2xl:w-[calc(100% -33px )] w-[calc(100%-25px)] pr-2">{faq.question}</div>
                      {openIndex === index ? (
                        <Minus
                          className="text-white bg-base2 rounded-full  2xl:w-[33px] 2xl:h-[33px] w-[25px] h-[25px] p-[3px] transition-all duration-300"
                          size={17}
                        />
                      ) : (
                        <Plus
                          className="text-white bg-base2 rounded-full  2xl:w-[33px]  2xl:h-[33px] w-[25px] h-[25px]   p-[3px] transition-all duration-300"
                          size={17}
                        />
                      )}
                    </button>
                    {openIndex === index && <div className="text-sm1 pb-[10px] transition-all duration-300">{faq.answer}</div>}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { Plus, Minus } from "lucide-react";
// import { useState } from "react";
// import parse from "html-react-parser";

// export default function FAQ({ faqs, title, description }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full py-[30px] sm:py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] max-sm:bg-[#F0FAFF]">
//       <div className="container">
//         <div className="flex flex-wrap lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[40px]">
//           <div className="w-full lg:w-[40%] 2xl:w-[40%] lg:border-r lg:border-r-[rgba(23,71,158,0.26)] pb-[30px] lg:pb-[0] lg:px-[15px] xl:px-[20px] 2xl:px-[40px] sm:block hidden">
//             <div className="w-full">
//               <h2 className="text-title1 mb-[20px] 2xl:mb-[30px] [&>span]:text-base2 [&>span]:font-bold">{parse(title)}</h2>
//               <div className="text-sm1">{parse(description)}</div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[60%] 2xl:w-[60%] lg:px-[15px] xl:px-[20px] 2xl:px-[40px]">
//             <div className="contentBx w-full">
//               <div className="font-bold text-black mb-2 xl:text-[20px] lg:text-[18px] text-[16px] uppercase">FAQ</div>
//               <div className="flex items-center justify-between mb-5 pb-[20px] border-b-1 border-[rgba(0,0,0,0.68)]">
//                 <div className="text-title1 text-black">
//                   Frequently asked <span className="text-base2 font-bold">&nbsp;Questions</span>
//                 </div>
//               </div>

//               {faqs?.map((faq, index) => (
//                 <div key={index} className="border-b border-[rgba(0,0,0,0.26)] 2xl:pt-[15px] pt-[10px] pb-[5px] 2xl:pb-[10px]">
//                   <button
//                     className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline  transition-all duration-300 pb-[10px]"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     <div className="2xl:w-[calc(100% -33px )] w-[calc(100%-25px)] pr-2">{faq.question}</div>
//                     {openIndex === index ? (
//                       <Minus
//                         className="text-white bg-base2 rounded-full  2xl:w-[33px] 2xl:h-[33px] w-[25px] h-[25px] p-[3px] transition-all duration-300"
//                         size={17}
//                       />
//                     ) : (
//                       <Plus
//                         className="text-white bg-base2 rounded-full  2xl:w-[33px]  2xl:h-[33px] w-[25px] h-[25px]   p-[3px] transition-all duration-300"
//                         size={17}
//                       />
//                     )}
//                   </button>
//                   {openIndex === index && <div className="text-sm1 pb-[10px] transition-all duration-300">{faq.answer}</div>}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
