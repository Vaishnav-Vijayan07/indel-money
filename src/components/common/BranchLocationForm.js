'use client';

import { useState } from "react";

export default function BranchLocationForm() {
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState("");

    const handleSearch = () => {
        console.log({ state, district, location, distance });
    };

    return (
        <form action="/search">
            <div className="bg-white shadow-lg rounded-[30px] px-[50px] py-[30px] flex gap-[30px] mb-[35px]">
                <div className="basis-1/5">
                    <select
                        className="px-[10px] py-[20px] border rounded-[10px] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] h-[48px]"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">Select State</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                    </select>
                </div>
                <div className="basis-1/5">
                    <select
                        className="px-[10px] py-[20px] border rounded-[10px] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] h-[48px]"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <option value="">Select District</option>
                        <option value="district1">District 1</option>
                        <option value="district2">District 2</option>
                    </select>
                </div>
                <div className="basis-1/5">
                    <select
                        className="px-[10px] py-[20px] border rounded-[10px] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] h-[48px]"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Select Location</option>
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                    </select>
                </div>
                <div className="basis-1/5">
                    <select
                        className="px-[10px] py-[20px] border rounded-[10px] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] h-[48px]"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    >
                        <option value="">Select Distance</option>
                        <option value="5km">5 KM</option>
                        <option value="10km">10 KM</option>
                    </select>
                </div>
                <div className="basis-1/5">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold"
                        onClick={handleSearch}
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        </form>
    );
};

