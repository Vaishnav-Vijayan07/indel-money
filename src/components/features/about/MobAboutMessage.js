const messages = [
  {
    image: "/images/chairman.png",
    name: "Mr. Mohanan Gopalakrishnan",
    title:
      'Message from <span class="text-[#F30000] font-bold">Chairman</span>',
    post: "Chairman",
    designation: "Chairman & Managing Director",
    message:
      "We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section. Empowered by the values we believe in, we are well equipped to operate in this challenging environment, where the only real constant is “change”, to offer better than the best, always.",
  },
  {
    image: "/images/ceo.png",
    name: "Mr. Umesh Mohanan",
    title: 'From The <span class="text-[#F30000] font-bold">CEO’s</span> Desk',
    post: "CEO",
    designation: "Executive Director & CEO",
    message:
      "At Indel Money, we are committed to building strong, trust-based relationships with a customer-first approach. As a diversified financial services provider, we offer tailored solutions to meet the needs of individuals from all walks of life. Whether you are a customer, partner, investor, or future employee, we strive to deliver exceptional value through innovation and transparency Our vision is to become the most sought-after financial solutions provider in the country. Through our branch network, designed as financial supermarkets, we proactively address the evolving needs of our customers. Leveraging technology-driven processes and rigorous monitoring, we ensure timely and reliable service, making us a preferred financier Backed by a passionate and experienced management team, Indel Money adheres to the highest standards of business excellence. With a proven track record and a relentless focus on improvement, we are dedicated to becoming a market champion in the financial services industry.",
  },
];

export default function MobAboutMessage() {
  return (
    <section className="py-[80px]">
      <div className="container">
        {messages.map((item, index) => (
          <div key={index}>{item} sfsdfsdf</div>
        ))}
      </div>
    </section>
  );
}
