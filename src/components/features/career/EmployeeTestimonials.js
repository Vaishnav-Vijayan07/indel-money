import Image from "next/image";

const employeeTestimonials = [
    {
        src: "/images/employeeTestimonials-1.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-2.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-3.jpg",
        title: "sreerajitha Balance",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-4.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-5.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-6.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    },
    {
        src: "/images/employeeTestimonials-6.jpg",
        title: "sreerajitha",
        designation: "Branch Manager, Indel Money South Kalamassery",
        description: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    }
];

export default function EmployeeTestimonials() {
    return (
        <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px] bg-base2/20">
            <div className="container">
                <div className="flex flex-wrap -mx-[15px] lg:-mx-[20px] 2xl:-mx-[40px]">
                    <div className="w-[576px]">
                        <div className="w-full h-auto aspect-4/4 block relative z-0">
                            <Image
                                src={"/images/employeeTestimonials-logo.svg"}
                                alt="employeeTestimonials-logo"
                                fill
                                sizes="576px"
                            />
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#93bffa] absolute z-1 top-[15%] left-[40%] scale-100"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#43baff] absolute z-1 top-[40%] left-[60%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#93baff] absolute z-1 top-[50%] -left-[10%] scale-40"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#ee3824] absolute z-1 top-[60%] left-[85%] scale-30"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#c9e0ff] absolute z-1 top-[70%] left-[65%] scale-50"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#dcebff] absolute z-1 top-[85%] left-[10%] scale-60"></div>
                            <div className="w-[40px] h-auto aspect-4/4 rounded-full bg-[#ffb1b1] absolute z-1 top-[90%] left-[85%] scale-80"></div>

                            {employeeTestimonials?.slice(0, 7).map((item, index) => (
                                <div
                                    key={index}
                                    className={`group w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[100px] h-auto aspect-4/4 rounded-full overflow-hidden border-white border-[4px] border-solid bg-[#ffb1b1] absolute z-1 
                                        ${index === 0
                                            ? 'top-[2%] left-[8%] scale-55'
                                            : index === 1
                                                ? 'top-[5%] left-[60%] scale-55'
                                                : index === 2
                                                    ? 'top-[30%] left-[0] scale-50'
                                                    : index === 3
                                                        ? 'top-[42%] left-[30%] scale-45'
                                                        : index === 4
                                                            ? 'top-[36%] left-[68%] scale-55'
                                                            : index === 5
                                                                ? 'top-[74%] left-[56%] scale-60'
                                                                : 'top-[84%] left-[20%]'
                                        }`}
                                >
                                    <Image
                                        src="/images/employeeTestimonials-1.jpg"
                                        alt={item.title}
                                        fill
                                        sizes="120px"
                                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[calc(100%-576px)] -px-[15px] lg:-px-[20px] 2xl:-px-[40px]">
                        <div className="w-full mb-[15px] lg:mb-[20px] 2xl:mb-[40px]">
                            <div className="text-title1 flex-1">Employee
                                <span className="font-bold text-base2">Testimonials</span>
                            </div>
                            <div className="w-[40px] lg:w-[60px] 3xl:w-[80px] h-auto aspect-4/4 relative z-0">
                                <Image
                                    src="/images/employeeTestimonials-delmt-1.svg"
                                    alt={item.title}
                                    fill
                                    sizes="80px"
                                />
                            </div>
                            <div className="text-sm-1">Avarage tenure is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
