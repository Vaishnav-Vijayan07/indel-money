import { notFound } from "next/navigation";

export async function fetchReportData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/investors/report`, {
            cache: "no-store", // Ensure fresh data
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                // This will trigger the not-found.js page
                notFound();
            }
            // This will trigger the error.js page
            throw new Error(`HTTP ${response.status}: Failed to fetch career data`);
        }

        const result = await response.json();
        const reportData = result.data;

        if (result.status === "success") {
            return {
                content: reportData?.content,
                reports: reportData?.annualReports,
                returns: reportData?.annualReturn,
                error: null
            };
        }
        return {
            content: null,
            reports: null,
            returns: null,
            error: result.message
        };
    } catch (error) {
        // Re-throw the error to be caught by error.js
        if (error.message?.includes('notFound')) {
            // Let notFound() handle this
            throw error;
        }
        throw new Error(`Failed to fetch career data: ${error.message}`);
    }
}
export async function fetchContactData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/investors/contact`, {
            cache: "no-store", // Ensure fresh data
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                // This will trigger the not-found.js page
                notFound();
            }
            // This will trigger the error.js page
            throw new Error(`HTTP ${response.status}: Failed to fetch career data`);
        }

        const result = await response.json();
        const contactData = result.data;

        if (result.status === "success") {
            return {
                content: contactData?.content,
                contacts: contactData?.contact,
                error: null
            };
        }
        return {
            content: null,
            contacts: null,
            error: result.message
        };
    } catch (error) {
        // Re-throw the error to be caught by error.js
        if (error.message?.includes('notFound')) {
            // Let notFound() handle this
            throw error;
        }
        throw new Error(`Failed to fetch career data: ${error.message}`);
    }
}

export async function fetchPolicyData(page = 1, limit = 5) {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/policies?page=${page}&limit=${limit}`, {
            cache: 'no-store', // or 'force-cache' depending on your needs
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                // This will trigger the not-found.js page
                notFound();
            }
            // This will trigger the error.js page
            throw new Error(`HTTP ${response.status}: Failed to fetch career data`);
        }

        const result = await response.json();
        const policyData = result.data;

        if (result.status === "success") {
            return {
                content: policyData?.content,
                policies: policyData?.policies,
                error: null
            };
        }
        return {
            content: null,
            policies: null,
            error: result.message
        };
    } catch (error) {
        // Re-throw the error to be caught by error.js
        if (error.message?.includes('notFound')) {
            // Let notFound() handle this
            throw error;
        }
        throw new Error(`Failed to fetch career data: ${error.message}`);
    }
}
