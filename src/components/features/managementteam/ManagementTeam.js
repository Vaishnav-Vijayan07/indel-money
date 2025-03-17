import Image from "next/image";
import Link from "next/link";

export default function ManagementTeam() {
    const slides = [
        {
            href: "/",
            image: "/images/team01.png",
            alt: "team-1",
            title: "Umesh Mohanan",
            post: "Executive Director & CEO",
        },
        {
            href: "/",
            image: "/images/team02.png",
            alt: "team-1",
            title: "Jijith Raj Thekkayil",
            post: "Business Head",
        },
        {
            href: "/",
            image: "/images/team03.png",
            alt: "team-1",
            title: "Sudheesh PR",
            post: "Head – Strategy, Operations",
        },
        {
            href: "/",
            image: "/images/team04.png",
            alt: "team-1",
            title: "A Sreekumar",
            post: "Head Credit & Risk",
        },
        {
            href: "/",
            image: "/images/team05.png",
            alt: "team-1",
            title: "Venugopalan MV",
            post: "Head Internal Audit",
        },
        {
            href: "/",
            image: "/images/team06.png",
            alt: "team-1",
            title: "K.N.C NAIR",
            post: "Chief Information Officer",
        },
        {
            href: "/",
            image: "/images/team07.png",
            alt: "team-1",
            title: "Chandrasekharan Nair Saji",
            post: "Chief Compliance Officer",
        },
        {
            href: "/",
            image: "/images/team08.png",
            alt: "team-1",
            title: "Narayanan Pisharath",
            post: "Head – Finance & Accounts",
        },
        {
            href: "/",
            image: "/images/team09.png",
            alt: "team-1",
            title: "Hanna P Nazir",
            post: "Company Secretary",
        },
        {
            href: "/",
            image: "/images/team010.png",
            alt: "team-1",
            title: "Prasad Chemben",
            post: "Business Head TPBV",
        },
    ];
    return (
        <section className="relative w-full py-[30px] lg:py-[40px] xl:py-[70px]">
            <div className="absolute bottom-[12%] left-0 w-full h-[60%] bg-[linear-gradient(94deg,rgba(243,0,0,0.00)_3.16%,rgba(235,2,8,0.10)_97.06%)] z-0"></div>
            <div className="container">
                <div className="flex flex-wrap mb-[60px]">
                    <div className="w-[45%] 2xl:w-[40%]">
                        <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
                            <span className="text-base2 font-bold">Indely</span>
                            ’s Guiding Lights
                        </h2>
                    </div>
                    <div className="w-[55%] 2xl:w-[60%]">
                        <p className="text-sm-1">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-[17px] -my-[30px]">
                    <TeamBox slides={slides} />
                </div>
            </div>
        </section>
    );
}
export function TeamBox({ slides }) {
    return (
        <>
            {slides.map((item, index) => (
                <div key={index} className="w-1/4 px-[17px] py-[30px]">
                    <div className="w-full">
                        <div className="relative group w-full h-full xl:rounded-[20px] md:rounded-[18px] rounded-[15px] overflow-hidden aspect-380/455">
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,#EFEFEF_0%,#DBEEF9_100%)] transition-opacity duration-500 group-hover:opacity-0"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,#EE3824_0%,#17479E_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={380}
                                height={455}
                                className="relative w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="mt-[20px]">
                            <div className="text-footer-1 mb-[10px]">
                                {item.title}
                            </div>
                            <div className="text-sm-1">
                                {item.post}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
