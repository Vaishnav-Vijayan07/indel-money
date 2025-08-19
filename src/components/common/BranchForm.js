"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { toSentenceCase } from "@/lib/utils/toSentenceCase";

export default function BranchForm({
  states,
  districts,
  locations,
  selectedState,
  selectedDistrict,
  selectedLocation,
  selectedDistance,
  onValueChange,
  onOpenChange,
  isMobile,
  useQueryParams = true,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMobile && useQueryParams) {
      const queryParams = new URLSearchParams({
        ...(selectedState && { state: selectedState }),
        ...(selectedDistrict && { district: selectedDistrict }),
        ...(selectedLocation && { location: selectedLocation }),
        ...(selectedDistance && { distance: selectedDistance }),
      }).toString();
      router.push(`/branch-locator?${queryParams}`);
    }
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    onValueChange("clear", true);

    // Only navigate with query params if useQueryParams is true
    if (isMobile && useQueryParams) {
      router.push(pathname);
    }
  };


  return (
    <form
      className="flex flex-wrap -mx-[10px] sm:-mx-[10px] 2xl:-mx-[15px]"
      onSubmit={handleSubmit}
    >
      {/* State */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <label className="sr-only">Select State</label>
        <Select
          value={selectedState}
          onValueChange={(value) => onValueChange("state", value)}
        >
          <SelectTrigger className="w-full bg-[#e7eff9] border-[]">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {states?.map((state) => (
              <SelectItem
                key={state?.value?.toString()}
                value={state?.value?.toString()}
              >
                {toSentenceCase(state?.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* District */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <label className="sr-only"> District</label>
        <Select
          value={selectedDistrict}
          onValueChange={(value) => onValueChange("district", value)}
        >
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {districts?.map((district) => (
              <SelectItem
                key={district?.id?.toString()}
                value={district?.id?.toString()}
              >
                {toSentenceCase(district?.district_name)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <label className="sr-only"> Location</label>
        <Select
          value={selectedLocation}
          onValueChange={(value) => onValueChange("location", value)}
        >
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {locations?.map((location) => (
              <SelectItem
                key={location?.id?.toString()}
                value={location?.id?.toString()}
              >
                {toSentenceCase(location?.location_name)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Distance */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <label className="sr-only"> Distance</label>
        <Select
          onOpenChange={onOpenChange}
          onValueChange={(value) => onValueChange("distance", value)}
        >
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select Distance" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            <SelectItem value="20">20km</SelectItem>
            <SelectItem value="40">40km</SelectItem>
            <SelectItem value="60">60km</SelectItem>
            <SelectItem value="80">80km</SelectItem>
            <SelectItem value="100">100km</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Buttons */}
      <div className="w-full md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px] flex items-center justify-center md:justify-end gap-2">
        {isMobile && useQueryParams && (
          <Button
            type="submit"
            className="btn btn-base2 max-w-[140px] lg:max-w-[160px] xl:max-w-[180px] 3xl:max-w-[220px]"
          >
            SEARCH
          </Button>
        )}
        <Button
          type="button"
          onClick={handleClearFilter}
          className="btn btn-base2 max-w-[140px] lg:max-w-[160px] xl:max-w-[180px] 3xl:max-w-[220px]" >
          CLEAR FILTER
        </Button>
      </div>
    </form>
  );
}
