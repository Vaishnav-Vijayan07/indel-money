"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/custom-accordion";
import { useEffect, useState } from "react";

function FaqAccordion({ items }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-black/25 [&:first-child]:border-t">
          <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">{item?.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function MobGoldLoanFaq({ faq_title, type = "goldloan" }) {
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

  return (
    <section className="w-full block py-[30px] bg-[#f0faff] px-[var(--container-padding)]">
      {/* <div className="text-[12px] leading-none font-bold text-black mb-[5px]">FAQ</div> */}
      <h3 className="text-title1 mb-[15px] [&>span]:text-base2 [&>span]:font-bold" dangerouslySetInnerHTML={{ __html: faq_title ? faq_title : "" }} />

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-black/75">Loading FAQs...</div>
        </div>
      )}

      {error && <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-600">Error loading FAQs: {error}</div>}

      {!loading && !error && faqs.length === 0 && <div className="text-sm text-black/75 text-center py-8">No FAQs available at the moment.</div>}

      {!loading && !error && faqs.length > 0 && <FaqAccordion items={faqs} />}
    </section>
  );
}
