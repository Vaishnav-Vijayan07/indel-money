"use client";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../../../lib/api/axios";

export default function GoldLoanFaq({ faq_title, type = "goldloan" }) {
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
          setFaqs(result.faqs || []);
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
    <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
      <div className="container">
        <h3
          className="text-[#5e5959bf] text-title1 font-normal mb-[20px] [&>span]:text-base2 [&>span]:font-bold"
          dangerouslySetInnerHTML={{ __html: faq_title ? faq_title : "" }}
        />

        <div className="w-full rounded-[24px] overflow-hidden bg-[#E7EFF9] py-[30px] 2xl:py-[40px]">
          {loading ? (
            <div className="px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] text-center">
              <div className="text-gray-600">Loading FAQs...</div>
            </div>
          ) : error ? (
            <div className="px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] text-center">
              <div className="text-red-500">Error loading FAQs: {error}</div>
            </div>
          ) : faqs?.length === 0 ? (
            <div className="px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] text-center">
              <div className="text-gray-600">No FAQs available for this section.</div>
            </div>
          ) : (
            faqs?.map((faq, index) => (
              <div
                key={faq.id || index}
                className={`px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] ${
                  openIndex === index ? "bg-[#D7E9FF]" : "bg-[#E7EFF9]"
                }`}
              >
                <button
                  className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline transition-all duration-300 pb-[10px]"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="2xl:w-[calc(100%-33px)] w-[calc(100%-22px)] pr-2">{faq.question}</div>
                  {openIndex === index ? (
                    <Minus
                      className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
                      size={17}
                    />
                  ) : (
                    <Plus
                      className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
                      size={17}
                    />
                  )}
                </button>
                {openIndex === index && (
                  <div className="text-sm1 pb-[10px] transition-all duration-300 text-[rgba(0,0,0,0.75)] max-w-[500px] xl:max-w-[600px] leading-[1.5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { Plus, Minus } from "lucide-react";
// import { useState } from "react";

// export default function GoldLoanFaq({ faq_title, faqs }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
//       <div className="container">
//         <div
//           className="text-black text-title1 font-normal mb-[20px] [&>span]:text-base2 [&>span]:font-bold"
//           dangerouslySetInnerHTML={{ __html: faq_title ? faq_title : "" }}
//         />

//         <div className="w-full rounded-[24px] overflow-hidden bg-[#E7EFF9] py-[30px] 2xl:py-[40px]">
//           {faqs?.map((faq, index) => (
//             <div
//               key={index}
//               className={`px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] ${
//                 openIndex === index ? "bg-[#D7E9FF]" : "bg-[#E7EFF9]"
//               }`}
//             >
//               <button
//                 className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline transition-all duration-300 pb-[10px]"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="2xl:w-[calc(100%-33px)] w-[calc(100%-22px)] pr-2">{faq.question}</div>
//                 {openIndex === index ? (
//                   <Minus
//                     className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
//                     size={17}
//                   />
//                 ) : (
//                   <Plus
//                     className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
//                     size={17}
//                   />
//                 )}
//               </button>
//               {openIndex === index && (
//                 <div className="text-sm1 pb-[10px] transition-all duration-300 text-[rgba(0,0,0,0.75)] max-w-[500px] xl:max-w-[600px] leading-[1.5]">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
