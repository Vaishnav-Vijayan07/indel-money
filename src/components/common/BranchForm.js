"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { Button } from "../../components/ui/button";
import api from "@/lib/api/axios";

export default function BranchForm() {
  const [states, setStates] = React.useState([]);
  const [districts, setDistricts] = React.useState([]);
  const [locations, setLocations] = React.useState([]);

  const fetchStates = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/states`);
      console.log('DATA', data);
      if (data.success) {
        setStates(data.data);
      } else {
        console.error("Failed to fetch states:", data.message);
      }
    } catch (error) {
      console.log("Error fetching states:", error);
    }
  };

  const fetchDistricts = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/districts`);
      if (data.success) {
        setDistricts(data.data);
      } else {
        console.error("Failed to fetch states:", data.message);
      }
    } catch (error) {
      console.log("Error fetching states:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/career/locations`);
      if (data.success) {
        setLocations(data.data);
      } else {
        console.error("Failed to fetch states:", data.message);
      }
    } catch (error) {
      console.log("Error fetching states:", error);
    }
  };

  React.useEffect(() => {
    fetchStates();
    fetchDistricts();
    fetchLocations();
  }, []);

  return (
    <form className="flex flex-wrap -mx-[10px] sm:-mx-[10px] 2xl:-mx-[15px]">
      {/* State */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <Select>
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {states.map((state, index) => (
              <SelectItem key={state?.id} value={state?.id}>
                {state?.state_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* District */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <Select>
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {districts.map((district, index) => (
              <SelectItem key={district?.id} value={district?.id}>
                {district?.district_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <Select>
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            {locations.map((location, index) => (
              <SelectItem key={location?.id} value={location?.location_name}>
                {location?.location_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Distance */}
      <div className="w-1/2 md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px]">
        <Select>
          <SelectTrigger className="w-full bg-[#e7eff9] border-[#e7eff9]">
            <SelectValue placeholder="Select Distance" />
          </SelectTrigger>
          <SelectContent className="bg-[#e7eff9] border-[#e7eff9]">
            <SelectItem value="10km">10km</SelectItem>
            <SelectItem value="20km">20km</SelectItem>
            <SelectItem value="30km">30km</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-1/5 p-[6px_10px] sm:p-[10px] 2xl:p-[15px] flex items-center justify-center md:justify-end">
        <Button
          type="submit"
          className="btn btn-base2 max-w-[140px] lg:max-w-[160px] xl:max-w-[180px] 3xl:max-w-[220px]"
        >
          SEARCH
        </Button>
      </div>
    </form>
  );
}
