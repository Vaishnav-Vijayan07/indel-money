import AsideMenu from "@/components/common/AsideMenu"
import PageBreadcrumb from "@/components/common/PageBreadcrumb"

const navigationItems = [
    {
        title: "Debt partners",
        href: "/partners",
    },
    {
        title: "Rating Agencies",
        href: "/",
        sub_menu: [
            {
                title: "Contact Form",
                href: "/investors/contact",
            },
            {
                title: "FAQ",
                href: "/investors/faq",
            },
        ]
    },
    {
        title: "Credit Bureau",
        href: "/",
    },
    {
        title: "Auditors",
        href: "/",
    },
    {
        title: "Self-regulatory association",
        href: "/",
        sub_menu: [
            {
                title: "Contact Form",
                href: "/investors/contact",
            },
            {
                title: "FAQ",
                href: "/investors/faq",
            },
        ]
    },
    {
        title: "Tech partners",
        href: "/",
    },
    {
        title: "Trustee ships",
        href: "/",
    },
    {
        title: "Strategic consultant",
        href: "/",
    },
    {
        title: "Business Partners",
        href: "/",
    },
];

export default function Partners() {
    return (
        <section>
            <div className="container">
                <div className="w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]">
                    <div className="text-title1 font-bold text-base2">Partners</div>
                    <PageBreadcrumb />
                </div>
                <div className="flex flex-wrap lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px] 3xl:-mx-[35px]">
                    <div className="w-[576px] lg:w-[376px] xl:w-[468px] 2xl:w-[520px] 3xl:w-[576px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
                        <AsideMenu aside_items={navigationItems} />
                    </div>
                    <div className="w-[calc(100%-576px)] lg:w-[calc(100%-376px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-576px)] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
                        dxd
                    </div>
                </div>
            </div>
        </section>
    )
}
