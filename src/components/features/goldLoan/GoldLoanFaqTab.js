// "use client";

// import React, { useState } from 'react';
// import { Plus, Minus } from 'lucide-react';

// export const GoldLoanFaqTab = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [openIndex, setOpenIndex] = useState(null);

//     // Manual data for tabs
//     const schemes = [
//         { id: 1, title: "Investment Plans" },
//         { id: 2, title: "Savings Schemes" },
//         { id: 3, title: "Insurance Plans" },
//         { id: 4, title: "Retirement Plans" },
//         { id: 5, title: "Tax Benefits" },
//         { id: 6, title: "Fixed Deposits" }
//     ];

//     // Manual data for FAQs based on active tab
//     const faqData = {
//         0: [
//             {
//                 id: 1,
//                 question: "What are the minimum investment requirements?",
//                 answer: "The minimum investment amount varies by plan type. For basic investment plans, you can start with as little as $500. Premium plans typically require a minimum of $5,000 to begin."
//             },
//             {
//                 id: 2,
//                 question: "How are returns calculated on investment plans?",
//                 answer: "Returns are calculated based on market performance and fund allocation. We provide detailed monthly statements showing your portfolio performance and projected returns based on historical data."
//             },
//             {
//                 id: 3,
//                 question: "Can I withdraw my investment before maturity?",
//                 answer: "Yes, most investment plans allow early withdrawal, though this may be subject to penalty fees. The exact terms depend on your specific plan and how long you've held the investment."
//             }
//         ],
//         1: [
//             {
//                 id: 1,
//                 question: "What interest rates do savings schemes offer?",
//                 answer: "Our savings schemes offer competitive interest rates ranging from 3.5% to 6.8% annually, depending on the term length and deposit amount. Longer terms typically offer higher rates."
//             },
//             {
//                 id: 2,
//                 question: "Are there any fees associated with savings accounts?",
//                 answer: "Most of our savings schemes have no monthly maintenance fees. However, some premium accounts may have annual fees that are often waived based on minimum balance requirements."
//             }
//         ],
//         2: [
//             {
//                 id: 1,
//                 question: "What types of insurance coverage are available?",
//                 answer: "We offer comprehensive coverage including life insurance, health insurance, disability insurance, and accidental death benefits. Coverage amounts range from $50,000 to $2 million."
//             },
//             {
//                 id: 2,
//                 question: "How do I file an insurance claim?",
//                 answer: "Claims can be filed online through our portal, by phone, or by visiting any of our branch offices. Most claims are processed within 7-14 business days once all required documentation is submitted."
//             }
//         ],
//         3: [
//             {
//                 id: 1,
//                 question: "When can I start withdrawing from my retirement plan?",
//                 answer: "You can begin withdrawing from most retirement plans at age 59½ without penalties. Early withdrawals may be subject to fees and tax implications depending on your plan type."
//             },
//             {
//                 id: 2,
//                 question: "How much should I contribute to my retirement plan?",
//                 answer: "We recommend contributing at least 10-15% of your annual income to your retirement plan. Our financial advisors can help you determine the optimal contribution amount based on your goals and timeline."
//             }
//         ],
//         4: [
//             {
//                 id: 1,
//                 question: "What tax benefits are available?",
//                 answer: "Depending on your plan, you may be eligible for tax deductions on contributions, tax-deferred growth, or tax-free withdrawals in retirement. Specific benefits vary by plan type and your tax situation."
//             },
//             {
//                 id: 2,
//                 question: "How do I maximize my tax savings?",
//                 answer: "To maximize tax savings, consider contributing the maximum allowed amount to tax-advantaged accounts, timing your contributions strategically, and consulting with our tax specialists for personalized advice."
//             }
//         ],
//         5: [
//             {
//                 id: 1,
//                 question: "What are the current fixed deposit rates?",
//                 answer: "Current fixed deposit rates range from 4.2% to 7.5% annually, depending on the term length. Terms range from 6 months to 5 years, with higher rates for longer commitment periods."
//             },
//             {
//                 id: 2,
//                 question: "Can I break my fixed deposit early?",
//                 answer: "Yes, early withdrawal is possible but may result in reduced interest rates and penalty fees. The exact terms depend on how long the deposit has been held and the original term length."
//             }
//         ]
//     };

//     const scheme_title = "Explore Our <span>Financial Solutions</span> and Find the Perfect Plan for Your Future";

//     const toggleAccordion = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     const handleTabClick = (index) => {
//         setActiveIndex(index);
//         setOpenIndex(null); // Reset accordion when switching tabs
//     };

//     const currentFaqs = faqData[activeIndex] || [];

//     return (
//         <section className="py-[35px] xl:py-[45px] 2xl:py-[65px] bg-[rgba(128,128,128,.2)]">
//             <div className='container'>
//                 <div className="w-full mx-auto p-4">
//                     <div className="flex items-center">

//                         {/* Thumbnail Slider */}
//                         <div className="w-full">
//                             <div className="w-full flex gap-2 overflow-x-auto pb-2">
//                                 {schemes?.map((scheme, index) => (
//                                     <div
//                                         key={scheme.id}
//                                         className="flex-shrink-0"
//                                         onClick={() => handleTabClick(index)}
//                                     >
//                                         <h4
//                                             className={`w-full min-w-[120px] h-[40px] 2xl:h-[50px] 3xl:h-[60px] text-[12px] 2xl:text-[16px] 3xl:text-[18px] px-[10px] font-bold flex items-center justify-center cursor-pointer transition-all duration-300 text-center
//                     ${activeIndex === index ? "bg-blue-600 text-white" : "bg-[#CFDFFE] text-black"}`}
//                                         >
//                                             {scheme.title}
//                                         </h4>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Slider */}
//                     <div className="w-full mt-4">
//                         <div className="w-full">
//                             {/* FAQ Content for Current Tab */}
//                             <div className="w-full">
//                                 <div className="w-full rounded-[24px] overflow-hidden bg-[#E7EFF9] py-[30px] 2xl:py-[40px]">
//                                     {currentFaqs.map((faq, index) => (
//                                         <div
//                                             key={faq.id}
//                                             className={`px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] ${openIndex === index ? "bg-[#D7E9FF]" : "bg-[#E7EFF9]"
//                                                 }`}
//                                         >
//                                             <button
//                                                 aria-expanded={openIndex === index}
//                                                 className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text-[1rem] text-[0.8rem] cursor-pointer hover:no-underline transition-all duration-300 pb-[10px]"
//                                                 onClick={() => toggleAccordion(index)}
//                                             >
//                                                 <div className="2xl:w-[calc(100%-33px)] w-[calc(100%-22px)] pr-2">
//                                                     {faq.question}
//                                                 </div>
//                                                 {openIndex === index ? (
//                                                     <Minus
//                                                         className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
//                                                         size={17}
//                                                     />
//                                                 ) : (
//                                                     <Plus
//                                                         className="relative text-white bg-base2 rounded-full 3xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] transition-all duration-300 xl:top-[0]"
//                                                         size={17}
//                                                     />
//                                                 )}
//                                             </button>
//                                             {openIndex === index && (
//                                                 <div className="text-sm1 pb-[10px] transition-all duration-300 text-[rgba(0,0,0,0.75)] max-w-[500px] xl:max-w-[600px] leading-[1.5]">
//                                                     {faq.answer}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default GoldLoanFaqTab;

import FaqCard from "@/components/common/FaqCard";

const data = {
    faq_info_list: [
        {
            key: "1",
            title: "PROCESS ",
            faqs: [
                {
                    key: "1-1",
                    title: "Are there specific shifts that are in higher demand?",
                    description:
                        "Shift demand can vary depending on location and specialty in Ireland Nursing Recruitment Agencies. Our app provides information on high-demand shifts.",
                },
                {
                    key: "1-2",
                    title: "How do I communicate my shift preferences to the agency?",
                    description:
                        "You can share your preferences through our app or speak directly with a recruiter assigned to you.",
                },
            ],
        },
        {
            key: "2",
            title: "INTEREST RATES",
            faqs: [
                {
                    key: "2-1",
                    title: "How do I apply for nursing shifts through your agency?",
                    description:
                        "Use our web portal or mobile app to search and apply for available nursing shifts.",
                },
                {
                    key: "2-2",
                    title: "How do I report my shift hours and receive compensation?",
                    description:
                        "Hours can be logged through our timekeeping system and payment is processed weekly.",
                },
            ],
        },
        {
            key: "3",
            title: "BRANCHES",
            faqs: [
                {
                    key: "2-1",
                    title: "How do I apply for nursing shifts through your agency?",
                    description:
                        "Use our web portal or mobile app to search and apply for available nursing shifts.",
                },
                {
                    key: "2-2",
                    title: "How do I report my shift hours and receive compensation?",
                    description:
                        "Hours can be logged through our timekeeping system and payment is processed weekly.",
                },
            ],
        },
        {
            key: "4",
            title: "TENURE",
            faqs: [
                {
                    key: "2-1",
                    title: "How do I apply for nursing shifts through your agency?",
                    description:
                        "Use our web portal or mobile app to search and apply for available nursing shifts.",
                },
                {
                    key: "2-2",
                    title: "How do I report my shift hours and receive compensation?",
                    description:
                        "Hours can be logged through our timekeeping system and payment is processed weekly.",
                },
            ],
        },
    ],
};



export default function GoldLoanFaqTab({ faq_title }) {
    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2
                    className="w-full text-[#5e5959bf] text-title1 font-normal xl:mb-[30px] mb-[20px] [&>span]:text-base2 [&>span]:font-bold">
                    Frequently Asked <span> Questions</span>
                </h2>
                <div className="w-full 2xl:py-[30px] xl:py-[20px] lg:py-[15px] py-[10px] bg-[#E7EFF9] rounded-[24px]">
                    <FaqCard data={data} />
                </div>
            </div>
        </section >
    );
}