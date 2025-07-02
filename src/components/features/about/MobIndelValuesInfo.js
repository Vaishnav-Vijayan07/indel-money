import Image from "next/image";

export default function MobIndelValuesInfo({ links }) {
  return (
    <section className="w-full py-[0_30px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[6px]">
          {links?.map((item) => (
            <div key={item.id} className="w-1/3 p-[2px] 4xs:p-[6px]">
              <div className="w-full h-full bg-white rounded-[10px] overflow-hidden shadow-[0_0_50px_0_rgba(0,0,0,0.10)] block p-[5px] 4xs:p-[10px]">
                <div>
                  <Image
                    src={item?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}` : "/images/icon-indel-6.png"}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-[30px] 4xs:w-[40px] aspect-square object-contain mx-auto my-[10px]"
                  />
                  <div className="text-[12px] 4xs:text-[13px] font-medium leading-[1.2] text-center text-base1 mb-[10px]">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
