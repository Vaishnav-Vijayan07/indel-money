import Image from 'next/image';


export default function DifferentShadesIndelInfo() {
  
  return (
    <section className="w-full block pb-[40px] lg:pb-[60px] 2xl:pb-[80px]">
      <div className="container">
        <div className="[&_p]:text-sm1 [&_p]:mb-[10px] sm:[&_p]:mb-[15px] lg:[&_p]:mb-[20px] [&_img]:mb-[10px] sm:[&_img]:mb-[15px] lg:[&_img]:mb-[20px]">
            <Image
              src="/images/shadeIndel-disc-1.png"
              alt="indel"
              width={260}
              height={100}
              className="max-w-[120px] lg:max-w-[176px] 2xl:max-w-[220px] 3xl:max-w-[268px]"
            />
            <p>Indel Automotive Private Limited, the automotive division of our organization, stands as one of India&apos;s foremost automotive dealership conglomerates. With a strong legacy of excellence and customer-centric values, we have established ourselves as a trusted name in the automotive industry. Over the years, we have forged strategic partnerships with some of the world&apos;s most renowned automotive manufacturers, enabling us to deliver cutting-edge vehicles and exceptional after-sales services to our customers.</p>
            <Image
              src="/images/shadeIndel-disc-2.jpg"
              alt="indel"
              width={420}
              height={276}
              style={{display: "inline", marginRight: "40px"}}
              className="max-w-[220px] lg:max-w-[276px] 2xl:max-w-[376px] 3xl:max-w-[468px]"
            />
            <Image
              src="/images/shadeIndel-disc-3.jpg"
              alt="indel"
              width={420}
              height={276}
              style={{display: "inline", marginRight: "40px"}}
              className="max-w-[220px] lg:max-w-[276px] 2xl:max-w-[376px] 3xl:max-w-[468px]"
            />
            <p>
              Our extensive network spans multiple cities across the country, featuring state-of-the-art showrooms and service centers designed to provide a seamless and premium experience. Each of our showrooms is equipped with modern facilities and staffed by highly trained professionals who are dedicated to assisting customers in finding the perfect vehicle to meet their needs. Our service centers, on the other hand, are equipped with advanced tools and technologies to ensure that every vehicle we sell receives the highest standard of maintenance and care.
              The Indel Automotive group comprises several distinguished brands, each representing a legacy of innovation, performance, and reliability. These include **KERALA VOLVO**, where we offer the luxury and sophistication of Volvo vehicles; **KAIRALI FORD**, delivering the rugged durability and innovation of Ford automobiles; **INDEL YAMAHA**, bringing the thrill and precision of Yamaha motorcycles; **INDEL HONDA**, showcasing the efficiency and reliability of Honda vehicles; and **INDEL SUZUKI**, providing the versatility and affordability of Suzuki cars and two-wheelers.
              <br />
              At Indel Automotive, we are committed to delivering more than just vehicles; we aim to create lasting relationships with our customers by offering unparalleled service, transparency, and trust. Whether you are looking to purchase a new vehicle or maintain an existing one, our team is here to ensure that your automotive journey is smooth, enjoyable, and rewarding. With a focus on innovation, customer satisfaction, and sustainable growth, we continue to drive forward as a leader in India&apos;s automotive landscape.
            </p>
        </div>
      </div>
    </section>
  )
}


