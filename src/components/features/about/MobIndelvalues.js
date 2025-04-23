import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    icon: "/images/icon-indel-1.png",
    title: "Indel Values",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 2,
    icon: "/images/icon-indel-2.png",
    title: "Board of directors",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 3,
    icon: "/images/icon-indel-3.png",
    title: "Management Team",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 4,
    icon: "/images/icon-indel-4.png",
    title: "Partners",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 5,
    icon: "/images/icon-indel-5.png",
    title: "Different shades of indel",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 6,
    icon: "/images/icon-indel-6.png",
    title: "Our Approach to proposition",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
];

export default function MobIndelValues() {
  return (
    <section className="w-full py-[0_30px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[6px]">
          {data.map((item) => (
            <div key={item.id} className="w-1/3 p-[2px] 4xs:p-[6px]">
              <div className="w-full h-full bg-white rounded-[10px] overflow-hidden shadow-[0_0_50px_0_rgba(0,0,0,0.10)] block p-[5px] 4xs:p-[10px]">
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-[30px] 4xs:w-[40px] aspect-square object-contain mx-auto my-[10px]"
                  />
                  <div className="text-[12px] 4xs:text-[13px] font-medium leading-[1.2] text-center text-base1 mb-[10px]">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
