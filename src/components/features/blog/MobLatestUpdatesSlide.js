
import MobBlogCard from './MobBlogCard';

export default function LatestUpdatesSlide({ slides, className }) {
    return (
        <div className="w-full" >
            {slides?.map((item, index) => (
                <div key={index} className="!h-[calc(420px/3)] lg:!h-[calc(440px/3)] xl:!h-[calc(468px/3)] 2xl:!h-[calc(576px/3)] 3xl:!h-[calc(700px/3)] mb-[6px]">
                    <MobBlogCard className={className} item={item} />
                </div>
            ))}
        </div>
    )
}
