"use client";

import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";


export default function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Enter Your email address",
        "Subscribe for latest updates",
        "Get up-to-date",
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (<PlaceholdersAndVanishInput type={"email"} placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />);
}
