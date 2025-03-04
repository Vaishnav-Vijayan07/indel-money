import Image from "next/image";
export default function ServiceCard({ item }) {
  return (
    <div>
      <Image src={item?.icon} alt={item?.title} width={50} height={50} />
      <p>{item?.title}</p>
    </div>
  );
}
