const TestimonialFilter = {
  ALL: "all",
  WORDS: "text",
  VIDEO: "video",
};

function TestimonialFilters({ activeFilter, onFilterChange }) {
  const filterOptions = [
    { key: TestimonialFilter.ALL, label: "ALL TESTIMONIALS" },
    { key: TestimonialFilter.WORDS, label: "EMPLOYEE TESTIMONIALS" },
    { key: TestimonialFilter.VIDEO, label: "VIDEO TESTIMONIALS" },
  ];
  return (
    <div className="flex flex-wrap 2xl:gap-[12px] gap-[8px] max-xl:mt-[20px] justify-center xl:justify-end">
      {filterOptions?.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`2xl:p-[10px_20px] p-[10px_15px] 3xl:text-[20px] xl:text-[14px] text-[12px] font-bold text-white rounded-[100px] select-none transition-all duration-500 ${
            activeFilter === key ? "bg-base1" : "bg-[#85B6CF] hover:bg-base2 cursor-pointer"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default TestimonialFilters;
