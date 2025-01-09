import styles from "@/styles/components/ServiceCard.module.scss";
import Image from "next/image";
export default function ServiceCard({ item }) {
  return (
    <div className={styles.service_card__container}>
      <Image src={item?.icon} alt={item?.title} width={50} height={50} />
      <p>{item?.title}</p>
    </div>
  );
}
