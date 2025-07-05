export const dynamic = "force-dynamic";
import React from "react";
import NcdReports from "@/components/features/investors/NcdReports";
import { defaultMeta } from "@/constants/constants";

async function fetchNcdData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/investors/ncd-reports`, {
            cache: 'no-store', // or 'force-cache' depending on your needs
        });

        const result = await response.json();
        const data = result.data;

        if (result.status === "success") {
            return {
                contents: data?.content,
                reports: data?.reports,
                error: null
            };
        }
        return {
            contents: null,
            reports: null,
            error: result.message
        };
    } catch (error) {
        return { reports: null, error: "Failed to fetch ncd data" };
    }
}

export default async function report() {

    const { contents, reports, error } = await fetchNcdData();


    if (!contents && !reports) {
        return <div>Failed to fetch report data</div>;
    }

    return (
        <>
            <NcdReports reports={reports} content={contents} />
        </>

    );
}
