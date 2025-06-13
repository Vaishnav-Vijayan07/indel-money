import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog";
import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import { useEffect, useMemo, useState } from "react";
import api from "@/lib/api/axios";
import toast from 'react-hot-toast';

export default function EnquiryModal({ isDialogOpen, onCancel, enquiryCalculatorData, type }) {
  const [serviceTypes, setServiceTypes] = useState([]);

  const postEnquiryData = async (enquiryData) => {
    try {
      let payload = {
        name: enquiryData.yourName,
        phone: enquiryData.contactNumber,
        email: enquiryData.emailAddress,
        service_types: enquiryData.serviceType,
        enquiry_type: type || "general",
        enquiry_type_details: enquiryCalculatorData || {}
      };

      const { data } = await api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-enquiries`, payload);

      if (data.success) {
        toast.success("Enquiry submitted successfully!");
        onCancel();
      }
    } catch (error) {
      toast.error("Enquiry submition failed!");
    }
  }

  const fetchServiceTypes = async () => {
    try {

      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-types`);
      if (data.success) {
        setServiceTypes(data.data);
      } else {
        toast.error("Failed to fetch service types!");
        return [];
      }
    } catch (error) {
      toast.error("service fetching failed!");
    }
  }

  useEffect(() => {
    fetchServiceTypes();
  }, [])

  const formattedServiceTypes = useMemo(() => {
    if (serviceTypes?.length > 0) {
      return serviceTypes?.map(type => ({
        label: type.type_name,
        value: type.id
      }));
    }
    return [];
  }, [serviceTypes]);

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={onCancel}>
      <AlertDialogContent>
        <div className="w-full min-w-[340px] sm:min-w-[360px] md:min-w-[376px] lg:min-w-[420px] xl:min-w-[468px] 2xl:min-w-[576px] 3xl:min-w-[668px] bg-[#dceafb] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_25px] lg:p-[20px_30px] xl:p-[30px_50px] 2xl:p-[40px_60px] 3xl:p-[50px_80px] relative z-0">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-black font-bold flex items-center mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
              Enquiry form
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              This action cannot be undone.
            </AlertDialogDescription>
            <EnquiryForm handleSubmit={postEnquiryData} serviceTypes={formattedServiceTypes} />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={onCancel}
              className="sm:text-[12px] 2xl:text-[14px] 3xl:text-[16px] focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] xl:top-[20px] 2xl:top-[25px] 3xl:top-[30px] right-[15px] xl:right-[20px] 2xl:right-[25px] 3xl:right-[30px] transition-color cursor-pointer hover:text-base2"
            >
              <span className="hidden sm:block">Close</span>
              <Image
                src="/images/modal-cancel.svg"
                alt="modal-cancel"
                width={20}
                height={20}
                className="w-[15px] lg:w-[20px]"
              />
            </AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
