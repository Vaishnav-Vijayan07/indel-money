import Image from "next/image";
import Link from "next/link";
import "./Career.css";
import { renderHtml } from "@/lib/utils/htmlParser";


function ImageBox({ item }) {
  return (
    <div className="group w-full h-full overflow-hidden rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] relative z-0">
      <Image
        src={item.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}` : "/images/careerLifeAtIndel-5.jpg"}
        alt={item?.image_alt ? item.image_alt : "careerLifeAtIndel"}
        fill
        sizes="320px"
        className="group-hover:scale-105 object-cover transition-transform duration-300"
      />
    </div>
  );
}

export default function CareerLifeAtIndel({
  gallery_title,
  gallery_sub_title,
  gallery_description,
  gallery_button_text,
  gallery_button_link,
  gallery,
}) {
  const galleryItems = gallery?.slice(0, 5)
  return (
    <section className="w-full block py-[20px_20px] lg:py-[40px_30px] 2xl:py-[60px_40px] 3xl:py-[80px_50px] relative z-0">
      <div className="container">
        <div className="flex items-center justify-between mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
          <div className="lg:max-w-[320px] xl:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[576px]">
            <div className="text-title1 font-bold mb-[10px] lg:mb-[15px] 2xl:mb-[20px] [&>span]:text-base2 [&>span]:font-bold">
              {gallery_title ? renderHtml(gallery_title) : "Life at Indel"}
            </div>
            <div className="text-sm1 ">
              {gallery_sub_title
                ? gallery_sub_title
                : "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis"}
            </div>
          </div>
          <div>
            <Link
              href={gallery_button_link ? gallery_button_link : "/"}
              className="btn btn-base2 min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] 3xl:min-w-[180px] cursor-pointer"
            >
              {gallery_button_text ? gallery_button_text : "Learn More"}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[var(--container-x)] mx-auto pl-[var(--container-padding)] pr-[var(--container-padding)] lg:max-w-[calc(100%-((100%-var(--container-x))/2))] lg:pr-0 lg:mr-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[376px] xl:w-[420px] 2xl:w-[520px] 3xl:w-[676px] mb-[15px] lg:mb-0">
            <div className="w-full h-full p-[20px_15px] lg:p-[30px_20px] xl:p-[40px_30px] 2xl:p-[60px_40px] 3xl:p-[80px_60px] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] bg-linear-to-b from-transparent to-white relative z-0 overflow-hidden after:content-[''] after:absolute after:-z-1 after:inset-0 after:opacity-50 after:block after:bg-linear-to-b after:from-base1 after:to-base2 after:pointer-events-none flex items-center">
              <Image src="/images/careerLifeAtIndel-bg.jpg" alt="careerLifeAtIndel-bg" fill sizes="676px" className="opacity-5 pointer-events-none" />
              <div className="editor">{gallery_description ? renderHtml(gallery_description) : ""}</div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-676px)] lg:px-[6px] 2xl:px-[10px]">
            <div className="flex flex-wrap -mx-[4px] lg:mx-0 lg:-my-[6px] 2xl:-my-[10px]">
              {/* First div: items 0,1 */}
              <div className="w-[30%]">
                {galleryItems?.slice(0, 2)?.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full h-[176px] lg:h-[220px] 2xl:h-[240px] 3xl:h-[320px] [&:nth-child(2)]:h-[180px] lg:[&:nth-child(2)]:h-[240px] 2xl:[&:nth-child(2)]:h-[320px] 3xl:[&:nth-child(2)]:h-[360px] p-[4px] lg:p-[6px] 2xl:p-[10px]"
                  >
                    <ImageBox item={item} />
                  </div>
                ))}
              </div>

              {/* Second div: items 2,3 */}
              <div className="w-[35%]">
                {galleryItems?.slice(2, 4)?.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full h-[135px] lg:h-[160px] 2xl:h-[200px] 3xl:h-[240px] [&:nth-child(2)]:h-[220px] lg:[&:nth-child(2)]:h-[300px] 2xl:[&:nth-child(2)]:h-[360px] 3xl:[&:nth-child(2)]:h-[440px] p-[4px] lg:p-[6px] 2xl:p-[10px]"
                  >
                    <ImageBox item={item} />
                  </div>
                ))}
              </div>

              {/* Third div: item 4 */}
              {galleryItems?.length > 4 && (
                <div className="w-[35%]">
                  <div key={galleryItems[4].id} className="w-full h-[355px] lg:h-[460px] 2xl:h-[560px] 3xl:h-[680px] p-[4px] lg:p-[6px] 2xl:p-[10px]">
                    <ImageBox item={galleryItems[4]} />
                  </div>
                </div>
              )}

              {/* Items > 4: separate divs */}
              {galleryItems?.slice(5)?.map((item) => (
                <div key={item.id} className="w-[25%]">
                  <div className="w-full h-[120px] lg:h-[180px] 2xl:h-[200px] 3xl:h-[240px] p-[4px] lg:p-[6px] 2xl:p-[10px]">
                    <ImageBox item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
