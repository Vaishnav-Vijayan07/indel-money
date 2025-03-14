import React from "react";
import Banner from "@/components/features/about/banner";
import Finacial from "@/components/features/about/finacial";
import Image from "next/image";
import Supermarket from "@/components/features/about/supermarket";

export default function About() {
    return (
        <>
           
            {/* Banner section */}
            <Banner />

            {/* Financial Partner section */}
            <Finacial />

            {/* Financial Supermarket section */}
            <Supermarket />
        </>
    );
}
