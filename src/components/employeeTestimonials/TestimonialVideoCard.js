import EmployeeTestimonialsVideoBox from "../common/EmployeeTestimonialsVideoBox";

function VideoTestimonialCard({ item }) {
  return (
    <div className="w-full h-full md:w-1/2 p-[6px_4px] sm:p-[10px] 2xl:p-[22px]">
      <div className="group w-full h-full rounded-[20px] 2xl:rounded-[24px] p-[15px] xl:p-[20px] 2xl:p-[30px] bg-[#D4E6FF] block relative z-0">
        <EmployeeTestimonialsVideoBox className={"h-full aspect-[795/415]"} item={item} />
      </div>
    </div>
  );
}

export default VideoTestimonialCard;
