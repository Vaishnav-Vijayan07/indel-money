import React from "react";
import NcdReports from "@/components/features/investors/NcdReports";
import { fetchNcdData } from "@/lib/fetchCalls/fetchInvestors";

export default async function report() {

    const { contents, reports, error } = await fetchNcdData();


    if (!contents && !returns) {
        return <div>Failed to fetch report data</div>;
    }

    return (
        <>
            <NcdReports reports={reports} content={contents} />
        </>

    );
}
