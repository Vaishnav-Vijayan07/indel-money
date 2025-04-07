"use client";

import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
// } from "@/components/ui/select";
} from "../../components/ui/select";


// import { Button } from "@/components/ui/button";
import { Button } from "../../components/ui/button";

export default function BranchForm() {

    return (
        <form
            className="flex flex-wrap -mx-[10px] sm:-mx-[10px] 2xl:-mx-[15px]"
        >
            {/* State */}
            <div className="w-1/2 md:w-1/5 p-[5px_10px] sm:p-[10px] 2xl:p-[15px]">
                <Select className="shadow-none outline-none border-none focus-within:shadow-none focus:shadow-none">
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] 2xl:rounded-[10px] shadow-none outline-none border-none cursor-pointer focus-within:shadow-none">
                        <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md w-full">
                        <SelectItem value="State 1">State 1</SelectItem>
                        <SelectItem value="State 2">State 2</SelectItem>
                        <SelectItem value="State 3">State 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* District */}
            <div className="w-1/2 md:w-1/5 p-[5px_10px] sm:p-[10px] 2xl:p-[15px]">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] 2xl:rounded-[10px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md w-full">
                        <SelectItem value="District 1">District 1</SelectItem>
                        <SelectItem value="District 2">District 2</SelectItem>
                        <SelectItem value="District 3">District 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Location */}
            <div className="w-1/2 md:w-1/5 p-[5px_10px] sm:p-[10px] 2xl:p-[15px]">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] 2xl:rounded-[10px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md w-full">
                        <SelectItem value="Location 1">Location 1</SelectItem>
                        <SelectItem value="Location 2">Location 2</SelectItem>
                        <SelectItem value="Location 3">Location 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Distance */}
            <div className="w-1/2 md:w-1/5 p-[5px_10px] sm:p-[10px] 2xl:p-[15px]">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] 2xl:rounded-[10px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select Distance" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md w-full">
                        <SelectItem value="10km">10km</SelectItem>
                        <SelectItem value="20km">20km</SelectItem>
                        <SelectItem value="30km">30km</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-1/5 p-[5px_10px] sm:p-[10px] 2xl:p-[15px] flex items-center justify-center md:justify-end">
                <Button type="submit" className="w-full cursor-pointer text-[14px] xl:text-[16px] 2xl:text-[18px] max-w-full md-w-[100px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[180px] 3xl:max-w-[195px] bg-[#EE3824] text-white rounded-[100px] h-[30px] xl:h-[40px] 2xl:h-[44px] 3xl:h-[48px] hover:bg-base1 transition-all">SEARCH</Button>
            </div>
        </form>
    );
}
