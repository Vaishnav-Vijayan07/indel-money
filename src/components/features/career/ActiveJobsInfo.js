import FindJobForm from "./FindJobForm";
import JobResultBox from "./JobResultBox";

const jobResults = [
    {
        id: 0,
        job_title: "Senior Accountant",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 1,
        job_title: "Sales Manager",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 2,
        job_title: "Branch Manager",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 3,
        job_title: "IT Administrator",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 4,
        job_title: "Branch Manager",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 5,
        job_title: "IT Administrator",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 6,
        job_title: "Branch Manager",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 7,
        job_title: "IT Administrator",
        experience: "5 Years",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
];

export default function ActiveJobsInfo() {
    return (
        <section className="w-full block pb-[30px] lg:pb-[40px] 2xl:pb-[50px]">
            <div className="container">
                <div
                    className="w-full h-auto block mb-[10px] lg:mb-[15px] 2xl:mb-[20px]"
                >
                    <FindJobForm variant={"activeJobs"} />
                </div>

                <div className="flex flex-wrap -mx-[15px] lg:-mx-[20px] 2xl:-mx-[25px]">
                    {jobResults?.map((item, index) => (
                        <div key={index} className="w-full lg:w-1/2 p-[5px_10px] lg:p-[10px_15px] 2xl:p-[15px_20px] 3xl:p-[20px_25px]">
                            <JobResultBox variant={"activeJobs"} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
