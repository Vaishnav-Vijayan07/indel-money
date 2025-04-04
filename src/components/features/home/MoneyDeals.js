import ServiceCard from "@/components/common/ServiceCard";

export default function MoneyDeals() {
  const services = [
    { id: 1, title: "GOLD LOAN", icon: "/icons/services/gold_loan.svg" },
    { id: 2, title: "MSME LOAN", icon: "/icons/services/msme_loan.svg" },
    { id: 3, title: "CONSUMER DURABLE  LOAN", icon: "/icons/services/consumer_loan.svg" },
    { id: 4, title: "LOAN AGAINST PROPERTY", icon: "/icons/services/property_loan.svg" },
    { id: 5, title: "FOREIGN EXCHANGE", icon: "/icons/services/foreign_echange.svg" },
  ];
  return (
    <section>
      <h4>Smart Money Deals</h4>

      <div>
        {services?.map((item) => (
          <ServiceCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
}
