import React from "react";
import Banner from "@/components/features/about/banner";
import Finacial from "@/components/features/about/finacial"; 
import Supermarket from "@/components/features/about/supermarket";
import Message from "@/components/features/about/message";

export default function About() {
    return (
        <>
           
            {/* Banner section */}
            <Banner />

            {/* Financial Partner section */}
            <Finacial />

            {/* Financial Supermarket section */}
            <Supermarket />

            {/* Message section */}
            <Message/>
        </>
    );
}
