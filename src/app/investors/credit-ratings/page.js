import React from "react";
import CreditRatings from "../../../components/features/investors/CreditRatings";
import { fetchCreditRatingsData } from "@/lib/fetchCalls/fetchInvestors";


export default async function QuarterlyReports() {

    const { reports, error } = await fetchCreditRatingsData()

    if (!reports) {
        return <div>Failed to fetch report data</div>;
    }

    return (
        <>
            <CreditRatings reports={reports} />
        </>

    );
}
