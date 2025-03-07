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
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

export default function SearchForm() {

    return (
        <form
            className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.15)] rounded-[22px] min-[1536px]:rounded-[30px] px-[30px] min-[1536px]:px-[50px] py-[20px] min-[1536px]:py-[30px] flex gap-[20px] min-[1536px]:gap-[30px] mb-[30px] min-[1536px]:mb-[35px]"
        >
            {/* State */}
            <div className="basis-1/5">
                <Select className="shadow-none outline-none border-none focus-within:shadow-none focus:shadow-none">
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] min-[1536px]:rounded-[10px] h-[37px] min-[1281px]:h-[45px] min-[1536px]:h-[48px] shadow-none outline-none border-none cursor-pointer focus-within:shadow-none">
                        <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md mt-2 w-full">
                        <SelectItem value="State 1" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">State 1</SelectItem>
                        <SelectItem value="State 2" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">State 2</SelectItem>
                        <SelectItem value="State 3" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">State 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* District */}
            <div className="basis-1/5">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] min-[1536px]:rounded-[10px] h-[37px] min-[1281px]:h-[45px] min-[1536px]:h-[48px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md mt-2 w-full">
                        <SelectItem value="District 1" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">District 1</SelectItem>
                        <SelectItem value="District 2" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">District 2</SelectItem>
                        <SelectItem value="District 3" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">District 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Location */}
            <div className="basis-1/5">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] min-[1536px]:rounded-[10px] h-[37px] min-[1281px]:h-[45px] min-[1536px]:h-[48px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md mt-2 w-full">
                        <SelectItem value="Location 1" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">Location 1</SelectItem>
                        <SelectItem value="Location 2" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">Location 2</SelectItem>
                        <SelectItem value="Location 3" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">Location 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Distance */}
            <div className="basis-1/5">
                <Select>
                    <SelectTrigger className="w-[100%] bg-[#E7EFF9] text-[rgba(50,50,50,0.60)] rounded-[7px] min-[1536px]:rounded-[10px] h-[37px] min-[1281px]:h-[45px] min-[1536px]:h-[48px] shadow-none outline-none border-none cursor-pointer">
                        <SelectValue placeholder="Select Distance" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E7EFF9] text-[rgba(50,50,50,0.80)] shadow-lg border border-gray-300 rounded-md mt-2 w-full">
                        <SelectItem value="10km" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">10km</SelectItem>
                        <SelectItem value="20km" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">20km</SelectItem>
                        <SelectItem value="30km" className="cursor-pointer px-4 py-2 transition-all hover:bg-blue-200 hover:text-blue-800 data-[state=checked]:bg-base1 data-[state=checked]:text-white rounded-md">30km</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Search Button */}
            <div className="basis-1/5 flex items-center justify-end">
                <Button type="submit" className="w-full cursor-pointer text-[14px] min-[1281px]:text-[16px] min-[1536px]:text-[18px] max-w-[195px] bg-[#EE3824] text-white rounded-[100px] h-[37px] min-[1281px]:h-[45px] min-[1536px]:h-[48px] hover:bg-base1 transition-all">SEARCH</Button>
            </div>
        </form>
    );
}
