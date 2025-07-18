"use client";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/custom-accordion";
import api from "@/lib/api/axios";

export default function FaqAccordion({ type = "contact" }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs based on type
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [type]);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">Loading FAQs...</div>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {faqs?.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-600">No FAQs available for this section.</div>
        </div>
      ) : (
        faqs?.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-black/25 [&:first-child]:border-t">
            <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))
      )}
    </Accordion>
  );
}

// import React from "react";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/custom-accordion";

// function FaqAccordion({ items }) {
//   return (
//     <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
//       {items?.map((item) => (
//         <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-black/25 [&:first-child]:border-t">
//           <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
//             {item.question}
//           </AccordionTrigger>
//           <AccordionContent>
//             <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">{item.answer}</div>
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }

// export default FaqAccordion;
