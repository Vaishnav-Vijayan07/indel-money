import ActiveJobsBanner from "@/components/features/career/ActiveJobsBanner";
import ActiveJobsInfo from "@/components/features/career/ActiveJobsInfo";
import { fetchData, fetchDropDownData } from "@/lib/fetchCalls/fetchActiveJobsData";



export default async function ActiveJobs() {
    return (
        <>
            <ActiveJobsBanner />
            <ActiveJobsInfo />
        </>
    )
}
