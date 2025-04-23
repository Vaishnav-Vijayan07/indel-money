import Image from "next/image";
import styles from '@/components/features/blog/Blog.module.css';
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

const PostDateDisplay = ({ date = "24 NOVEMBER 2024" }) => {
    return (
        <div className="flex items-center text-[#505050] font-normal 2xl:text-[18px] md:text-[14px] text-[12px] sm:border-b border-b-[rgb(0,0,0,18%)] pb-[10px] sm:pb-[15px] md:pb-[20px] 2xl:mb-[30px] md:mb-[20px] sm:mb-[15px] mb-[10px]">
            <span>Posted On:</span>
            <span className="uppercase lg:pl-[10px]">{date}</span>
        </div>
    );
};

const BlogDetail = () => {
    return (
        <section className="w-full block py-[20px] lg:p-[30px_0_25px] 2xl:p-[50px_0_35px] relative z-0 before:content-[''] before:absolute before:-z-1 before:top-0 before:bottom-0 before:block before:w-full before:h-[50%] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:my-auto before:pointer-events-none sm:before:block before:hidden">
            <div className="container">
                <div className="2xl:mb-[55px] md:mb-[20px] sm:mb-[10px] mb-[15px] sm:block hidden">
                    <PageBreadcrumb />
                </div>
                <div className={`${styles.ckCntWrap} border-b border-b-[rgb(0,0,0,18%)] 2xl:pb-[35px] xl:pb-[20px] md:pb-[20px] sm:pb-[10px] pb-[15px]`}>
                    <div className="w-full sm:hidden block">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
                        <PostDateDisplay className="!border-b-[rgb(0,0,0,0%)]" />
                    </div>
                    <Image
                        src={"/images/blog-detail-1.jpg"}
                        alt={"bg"}
                        width={360}
                        height={460}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"/>
                    <div className="sm:block hidden">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
                        <PostDateDisplay />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum nec sed risus. Nunc lacinia in metus ut vehicula. Phasellus et lectus vitae turpis scelerisque convallis a at lorem. Nulla sed lectus suscipit, porta risus non, porta risus. Integer condimentum neque sit amet turpis convallis fermentum sit amet vitae leo. Integer faucibus odio in nibh sollicitudin ullamcorper. Phasellus facilisis, ipsum et malesuada dictum, felis turpis gravida eros, a commodo nunc dolor non nunc. Vestibulum sollicitudin massa dolor, quis mollis dui euismod non. Suspendisse a lectus scelerisque, consequat dolor non, eleifend velit. Morbi vehicula gravida risus. Suspendisse sapien mi, ullamcorper ut ipsum ut, pharetra lacinia nulla.
                        Etiam et sapien sed libero scelerisque blandit ut sit amet eros. Phasellus molestie ligula metus, eget pulvinar mi molestie vitae. </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum nec sed risus. Nunc lacinia in metus ut vehicula. Phasellus et lectus vitae turpis scelerisque convallis a at lorem. Nulla sed lectus suscipit, porta risus non, porta risus. Integer condimentum neque sit amet turpis convallis fermentum sit amet vitae leo. Integer faucibus odio in nibh sollicitudin ullamcorper. Phasellus facilisis, ipsum et malesuada dictum, felis turpis gravida eros, a commodo nunc dolor non nunc. Vestibulum sollicitudin massa dolor, quis mollis dui euismod non. Suspendisse a lectus scelerisque, consequat dolor non, eleifend velit. Morbi vehicula gravida risus. Suspendisse sapien mi, ullamcorper ut ipsum ut, pharetra lacinia nulla.
                        Etiam et sapien sed libero scelerisque blandit ut sit amet eros. Phasellus molestie ligula metus, eget pulvinar mi molestie vitae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum nec sed risus. Nunc lacinia in metus ut vehicula. Phasellus et lectus vitae turpis scelerisque convallis a at lorem. Nulla sed lectus suscipit, porta risus non, porta risus. Integer condimentum neque sit amet turpis convallis fermentum sit amet vitae leo. Integer faucibus odio in nibh sollicitudin ullamcorper. Phasellus facilisis, ipsum et malesuada dictum, felis turpis gravida eros, a commodo nunc dolor non nunc. Vestibulum sollicitudin massa dolor, quis mollis dui euismod non. Suspendisse a lectus scelerisque, consequat dolor non, eleifend velit. Morbi vehicula gravida risus. Suspendisse sapien mi, ullamcorper ut ipsum ut, pharetra lacinia nulla.
                        Etiam et sapien sed libero scelerisque blandit ut sit amet eros. Phasellus molestie ligula metus, eget pulvinar mi molestie vitae.
                    </p>
                    <Image
                        src={"/images/blog-detail-1.jpg"}
                        alt={"bg"}
                        width={360}
                        height={460}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05] sm:block hidden"/> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum nec sed risus. Nunc lacinia in metus ut vehicula. Phasellus et lectus vitae turpis scelerisque convallis a at lorem. Nulla sed lectus suscipit, porta risus non, porta risus. Integer condimentum neque sit amet turpis convallis fermentum sit amet vitae leo. Integer faucibus odio in nibh sollicitudin ullamcorper. Phasellus facilisis, ipsum et malesuada dictum, felis turpis gravida eros, a commodo nunc dolor non nunc. Vestibulum sollicitudin massa dolor, quis mollis dui euismod non. Suspendisse a lectus scelerisque, consequat dolor non, eleifend velit. Morbi vehicula gravida risus. Suspendisse sapien mi, ullamcorper ut ipsum ut, pharetra lacinia nulla.
                        Etiam et sapien sed libero scelerisque blandit ut sit amet eros. Phasellus molestie ligula metus, eget pulvinar mi molestie vitae. Suspendisse mollis urna quis urna vulputate rutrum. Praesent mauris sapien, venenatis ac nisl eu, venenatis varius lacus. Nam vitae pulvinar justo, sed dictum mi. Ut eget elit vel urna ullamcorper imperdiet vel sit amet turpis. Sed facilisis nulla libero, finibus ornare ante efficitur at. Cras laoreet justo sit amet elit suscipit pellentesque.
                        Fusce nec dapibus ante. Fusce blandit eget dolor vestibulum placerat. Pellentesque sed porttitor tellus, scelerisque hendrerit augue. Duis ornare rhoncus egestas. Duis hendrerit massa id massa ultrices,
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum nec sed risus. Nunc lacinia in metus ut vehicula. Phasellus et lectus vitae turpis scelerisque convallis a at lorem. Nulla sed lectus suscipit, porta risus non, porta risus. Integer condimentum neque sit amet turpis convallis fermentum sit amet vitae leo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
