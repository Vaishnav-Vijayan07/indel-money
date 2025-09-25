"use client";

import React from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTitle } from "../ui/custom-alert-dialog";
import parse from "html-react-parser";

const PDFViewerAlert = ({ isOpen, onOpenChange, disclaimer, onAgree, onDisagree, title = "Document Viewer", logoSrc = "/icons/logo_sm.svg" }) => {
  const handleClose = () => {
    onOpenChange(false);
  };




console.log("parsed disclaimer: ",parse(disclaimer).props.children)

  const handleAgree = () => {
    onAgree();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <div className="w-[400px] md:min-w-[736px] lg:min-w-[864px] xl:min-w-[1088px] 2xl:min-w-[1312px] 3xl:min-w-[1664px] mx-auto bg-white rounded-[15px] lg:rounded-[36px] py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[70px] px-[15px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 3xl:px-[60px] relative z-0">
          {/* Close Button */}
          <AlertDialogCancel
            onClick={handleClose}
            className="group text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-none focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-10 top-[15px] lg:top-[40px] xl:top-[45px] 2xl:top-[50px] 3xl:top-[60px] right-[15px] lg:right-[40px] xl:right-[45px] 2xl:right-[50px] 3xl:right-[60px] transition-color cursor-pointer hover:text-red-600 items-center bg-white/80 backdrop-blur-sm rounded-full p-2"
          >
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 group-hover:scale-90 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </AlertDialogCancel>
          {/* Header */}
          <div className="flex flex-wrap gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[50px] mb-[20px] lg:mb-[30px] 2xl:mb-[40px] flex-shrink-0 items-center justify-center">
            <AlertDialogTitle className="text-center text-[18px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px] 2xl:text-[56px] 3xl:text-[64px] leading-none  mt-[2px] 2xl:mt-[4px] mb-[4px] 2xl:mb-[6px]">
              Disclaimer
            </AlertDialogTitle>
          </div>

          {/* PDF Content - Full Height */}
          <div className="flex-1 overflow-auto mb-[20px] lg:mb-[30px] 2xl:mb-[40px]">
            <div
              className="h-full w-full border border-gray-200 rounded-[8px] lg:rounded-[12px] 2xl:rounded-[16px] shadow-inner overflow-auto"
              style={{
                minHeight: "400px",
                maxHeight: "calc(90vh - 280px)",
              }}
            >
              <div className="w-full p-4 sm:p-6 lg:p-8">{parse(disclaimer).props.children !== undefined ? parse(disclaimer) : <p>No disclaimer available.</p>}</div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-[12px] lg:gap-[16px] 2xl:gap-[20px] justify-end flex-shrink-0 pt-[15px] lg:pt-[20px] 2xl:pt-[25px] border-t border-gray-200">
            <button
              onClick={handleAgree}
              className="w-full sm:w-auto px-[20px] lg:px-[30px] xl:px-[40px] 2xl:px-[50px] 3xl:px-[60px] py-[12px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] 3xl:py-[28px] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-[8px] lg:rounded-[12px] 2xl:rounded-[16px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              I Agree
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PDFViewerAlert;
