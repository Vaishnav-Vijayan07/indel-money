"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
import { useMap } from "react-leaflet";

// Leaflet CSS
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet itself to ensure it only loads on the client
import L from "leaflet";

// Branch locations data
const branchLocations = [
  {
    id: 1,
    name: "Vazhakkala",
    address:
      "1st Floor Above Anns Bakery, Chembumukku PO Vazhakkala, Ernakulam, Kerala, 682030",
    phone: "9072588911",
    email: "vazhakkala@indelmoney.in",
    contactNumber: "0484-2423422",
    coordinates: [9.9312, 76.2673],
  },
  {
    id: 2,
    name: "Kakkanad",
    address:
      "1st Floor Above Anns Bakery, Chembumukku PO Vazhakkala, Ernakulam, Kerala, 682030",
    phone: "9072588911",
    email: "vazhakkala@indelmoney.in",
    contactNumber: "0484-2423422",
    coordinates: [9.9412, 76.2773],
  },
  {
    id: 3,
    name: "Palavattom",
    address:
      "1st Floor Above Anns Bakery, Chembumukku PO Vazhakkala, Ernakulam, Kerala, 682030",
    phone: "9072588911",
    email: "vazhakkala@indelmoney.in",
    coordinates: [9.9212, 76.2573],
  },
];

// Custom popup content component
const CustomPopup = ({ branch }) => {
  return (
    <div className="popup-content w-[260px] lg:w-[320px] 2xl:w-[376px]">
      <h3 className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-bold line-clamp-1 text-[#1B1B1B] mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
        {branch.name}
      </h3>
      {/* Popup content remains unchanged */}
      <div className="flex items-start mb-[5px] lg:mb-[10px] 2xl:mb-[15px] flex-wrap">
        <svg
          className="w-[10px] lg:w-[14px] 2xl:w-[16px] h-auto aspect-square mt-[1px] lg:mt-[2px] 2xl:mt-[4px]"
          viewBox="0 0 12 16"
          fill="#F30000"
        >
          <path d="M5.99772 0C2.80256 0 0.203125 2.59944 0.203125 5.79456C0.203125 9.75981 5.38872 15.581 5.6095 15.8269C5.81687 16.0579 6.17894 16.0575 6.38594 15.8269C6.60672 15.581 11.7923 9.75981 11.7923 5.79456C11.7922 2.59944 9.19284 0 5.99772 0ZM5.99772 8.70997C4.39016 8.70997 3.08234 7.40213 3.08234 5.79456C3.08234 4.187 4.39019 2.87919 5.99772 2.87919C7.60525 2.87919 8.91306 4.18703 8.91306 5.79459C8.91306 7.40216 7.60525 8.70997 5.99772 8.70997Z" />
        </svg>
        <span className="w-[calc(100%-16px)] pl-[10px] text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal text-[#1B1B1B] m-0">
          {branch.address}
        </span>
      </div>
      <div className="flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px] flex-wrap">
        <svg className="w-[10px] lg:w-[14px] 2xl:w-[16px] h-auto aspect-square" viewBox="0 0 16 16" fill="#F30000">
          <path d="M15.5032 12.0936C14.804 11.3944 14.1067 10.6952 13.4075 9.99789C12.853 9.41521 12.1257 9.41521 11.543 9.99789C11.1069 10.4339 10.669 10.87 10.2329 11.3079C10.1164 11.4245 10.0281 11.4245 9.88332 11.3662C9.6202 11.1914 9.30066 11.0749 9.03751 10.9001C7.78574 10.1144 6.70875 9.09381 5.77647 7.92848C5.31034 7.34581 4.90247 6.73495 4.61113 6.03576C4.55287 5.89103 4.55287 5.80269 4.6694 5.68616C5.13553 5.27829 5.54341 4.84224 5.97946 4.46256C6.5922 3.8517 6.5922 3.1525 5.97946 2.54164C5.60166 2.16197 5.28026 1.84244 4.93255 1.49285C4.55287 1.11505 4.20327 0.765455 3.85368 0.415847C3.30107 -0.138616 2.57182 -0.138616 1.99102 0.415847C1.55309 0.851908 1.11704 1.28797 0.679087 1.72591C0.271236 2.13377 0.068228 2.6281 0.00995039 3.18258C-0.0483042 4.08476 0.154681 4.95877 0.476079 5.80269C1.11704 7.57888 2.10755 9.09381 3.30107 10.5204C4.90247 12.4432 6.85346 13.9863 9.09579 15.0652C10.1164 15.5313 11.1652 15.9392 12.2704 15.9975C13.0861 16.0257 13.7571 15.8227 14.3097 15.2099C14.6875 14.8021 15.1254 14.4243 15.5032 14.0164C16.0859 13.4037 16.0859 12.6763 15.5032 12.0936Z" />
        </svg>
        <span className="w-[calc(100%-16px)] pl-[10px] text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal text-[#1B1B1B]">
          {branch.phone}
        </span>
      </div>
      <div className="flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px] flex-wrap">
        <svg className="w-[10px] lg:w-[14px] 2xl:w-[16px] h-auto aspect-square" viewBox="0 0 16 16" fill="#F30000">
          <path d="M9.33716 9.80206C8.93909 10.0674 8.47672 10.2077 8 10.2077C7.52331 10.2077 7.06094 10.0674 6.66287 9.80206L0.106531 5.43103C0.0701562 5.40678 0.0347187 5.3815 0 5.3555V12.5179C0 13.3391 0.666406 13.9908 1.47291 13.9908H14.5271C15.3482 13.9908 16 13.3244 16 12.5179V5.35547C15.9652 5.38153 15.9297 5.40688 15.8932 5.43116L9.33716 9.80206Z" />
          <path d="M0.626562 4.65131L7.18291 9.02238C7.43109 9.18784 7.71553 9.27056 7.99997 9.27056C8.28444 9.27056 8.56891 9.18781 8.81709 9.02238L15.3734 4.65131C15.7658 4.38991 16 3.95241 16 3.48022C16 2.66831 15.3395 2.00781 14.5276 2.00781H1.47241C0.660531 2.00784 0 2.66834 0 3.481C0 3.95241 0.23425 4.38991 0.626562 4.65131Z" />
        </svg>
        <span className="w-[calc(100%-16px)] pl-[10px] text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal text-[#1B1B1B]">
          {branch.email}
        </span>
      </div>
      {branch.contactNumber && (
        <div className="flex items-center flex-wrap">
          <svg className="w-[10px] lg:w-[14px] 2xl:w-[16px] h-auto aspect-square" viewBox="0 0 16 16" fill="#F30000">
            <path d="M11.8855 5.13086L11.853 5.59086C11.8451 5.70016 11.8708 5.80926 11.9266 5.90354C11.9825 5.99782 12.0658 6.07277 12.1655 6.11836C13.058 6.52586 15.4155 7.41836 15.6805 5.58586L11.8855 5.13086Z" />
            <path d="M4.08694 4.63578L4.04194 4.00078C4.03643 3.92395 4.04684 3.8468 4.07251 3.77418C4.09818 3.70155 4.13856 3.63499 4.19112 3.57868C4.24367 3.52237 4.30729 3.4775 4.37797 3.44689C4.44866 3.41628 4.52491 3.40058 4.60194 3.40078H11.4044C11.4813 3.40093 11.5572 3.41688 11.6276 3.44764C11.698 3.4784 11.7613 3.52332 11.8136 3.5796C11.8659 3.63587 11.9061 3.70231 11.9316 3.77477C11.9571 3.84722 11.9674 3.92416 11.9619 4.00078L11.9169 4.64578L15.7144 5.10078C15.7144 4.90078 15.7144 4.71328 15.7144 4.53328C15.7369 3.73213 15.4707 2.94959 14.9644 2.32828C14.4699 1.76601 13.8257 1.35591 13.1069 1.14578C11.8269 0.700781 10.1369 0.613281 8.00194 0.613281C5.86694 0.613281 4.17694 0.700781 2.87444 1.13578C2.1557 1.34591 1.5115 1.75601 1.01694 2.31828C0.510665 2.93959 0.244495 3.72213 0.266937 4.52328V5.09078L4.08694 4.63578Z" />
            <path d="M4.15196 5.59086L4.11946 5.13086L0.324463 5.58586C0.574463 7.42086 2.94696 6.52586 3.83946 6.11836C3.93911 6.07277 4.02245 5.99782 4.0783 5.90354C4.13415 5.80926 4.15986 5.70016 4.15196 5.59086Z" />
            <path d="M8.10137 9.02533C7.69595 8.9944 7.29073 9.08777 6.93972 9.293C6.58872 9.49823 6.3086 9.80557 6.13672 10.1741C5.96483 10.5425 5.90934 10.9547 5.97764 11.3555C6.04593 11.7563 6.23478 12.1268 6.519 12.4176C6.80321 12.7083 7.1693 12.9055 7.56847 12.983C7.96763 13.0604 8.38091 13.0143 8.75321 12.8508C9.12551 12.6874 9.43915 12.4143 9.65232 12.0681C9.86549 11.7218 9.96806 11.3189 9.94637 10.9128C9.92046 10.4278 9.71895 9.96884 9.37944 9.62151C9.03994 9.27419 8.58565 9.06228 8.10137 9.02533Z" />
            <path d="M11.2692 6.75032V5.88782C11.2732 5.51627 11.1296 5.15832 10.8699 4.89256C10.6102 4.62679 10.2557 4.47493 9.88418 4.47032L9.85918 6.73532L6.12168 6.69282L6.14668 4.42782C5.77513 4.42381 5.41718 4.56741 5.15142 4.82708C4.88565 5.08676 4.73379 5.44128 4.72918 5.81282V6.67532C4.13726 6.66887 3.56204 6.87141 3.10475 7.2473C2.64746 7.6232 2.33741 8.14834 2.22918 8.73032L1.32418 13.6103C1.287 13.8113 1.2942 14.018 1.34527 14.2159C1.39635 14.4138 1.49006 14.5981 1.61985 14.756C1.74964 14.9139 1.91237 15.0415 2.09665 15.1299C2.28093 15.2183 2.4823 15.2654 2.68668 15.2678L13.1142 15.3878C13.3185 15.39 13.5208 15.3476 13.7069 15.2635C13.8931 15.1794 14.0587 15.0556 14.192 14.9008C14.3253 14.746 14.4233 14.564 14.4789 14.3674C14.5346 14.1709 14.5466 13.9645 14.5142 13.7628L13.7217 8.86032C13.6264 8.27629 13.3283 7.74456 12.8797 7.35863C12.4312 6.97271 11.8609 6.75731 11.2692 6.75032ZM5.83668 13.5603C5.66635 13.4449 5.51957 13.2981 5.40418 13.1278C5.07566 12.6788 4.85894 12.1578 4.77198 11.6083C4.68503 11.0587 4.73035 10.4964 4.90418 9.96782C5.1548 9.24271 5.65516 8.63037 6.3158 8.2403C6.97643 7.85022 7.75427 7.70783 8.51025 7.83859C9.26623 7.96934 9.95105 8.36472 10.4423 8.95403C10.9335 9.54333 11.1992 10.2882 11.1917 11.0553C11.1517 13.5003 8.39418 15.2953 5.83668 13.5603Z" />
          </svg>
          <span className="w-[calc(100%-16px)] pl-[10px] text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal text-[#1B1B1B]">
            {branch.contactNumber}
          </span>
        </div>
      )}
      <div className="lg:mt-[15px] 2xl:mt-[20px] pt-[5px] lg:pt-[10px] 2xl:pt-[15px] border-t-[1px] border-[#E5E5E5] border-dashed">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates[0]},${branch.coordinates[1]}`}
          target="_blank"
          className="block text-center bg-base1 px-3 py-2 rounded hover:bg-[#F30000] transition-colors"
        >
          <div className="flex items-center justify-center">
            <svg
              className="w-[10px] lg:w-[14px] 2xl:w-[16px] h-auto aspect-square mr-2"
              viewBox="0 0 16 16"
              fill="#ffffff"
            >
              <path d="M15.76 7.44L8.56 0.24C8.24003 -0.08 7.76 -0.08 7.44 0.24L0.24 7.44C-0.08 7.76 -0.08 8.24003 0.24 8.56L7.44 15.76C7.76 16.08 8.24003 16.08 8.56 15.76L15.76 8.56C16.08 8.24003 16.08 7.76003 15.76 7.44ZM9.6 10V8.00003H6.4V10.4H4.8V7.20003C4.8 6.72003 5.12 6.40003 5.6 6.40003H9.6V4.40003L12.4 7.20003L9.6 10Z" />
            </svg>
            <span className="text-white">Get Directions</span>
          </div>
        </a>
      </div>
    </div>
  );
};

// MapController component with SSR check
function MapController({ selectedBranch }) {
  const [isMounted, setIsMounted] = useState(false);
  const map = typeof window !== "undefined" ? useMap() : null;
  const markerRefs = useRef({});

  useEffect(() => {
    setIsMounted(true); // Ensure this runs only on the client
  }, []);

  useEffect(() => {
    if (!isMounted || !map) return;

    // Pan to the selected branch location
    map.setView(selectedBranch.coordinates, 13);

    // Open the popup for the selected branch
    if (markerRefs.current[selectedBranch.id]) {
      markerRefs.current[selectedBranch.id].openPopup();
    }
  }, [selectedBranch, map, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const style = document.createElement("style");
    style.innerHTML = `
            .leaflet-popup-content-wrapper {
                border-radius: 24px;
                padding: 0;
                overflow: hidden;
            }
            .leaflet-popup-content {
                margin: 0;
                padding: 20px;
                width: auto !important;
            }
            .leaflet-popup-tip {
                background-color: white;
            }
            // .popup-content {
            //     min-width: 355px;
            // }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isMounted]);

  if (!isMounted || !L) return null;

  const mapPinIcon = L.icon({
    iconUrl: "/images/map-pin.png",
    iconSize: [27, 36],
    iconAnchor: [13, 36],
  });

  return (
    <>
      {branchLocations.map((branch) => (
        <Marker
          key={branch.id}
          position={branch.coordinates}
          icon={mapPinIcon}
          ref={(ref) => {
            if (ref) markerRefs.current[branch.id] = ref;
          }}
        >
          <Popup closeButton={false}>
            <CustomPopup branch={branch} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function BranchLocationsInfo({ item, type, selectedBranch, branch }) {
  const icons = {
    address: (
      <svg
        className={`w-[12px] lg:w-[14px] 2xl:w-[16px] aspect-square mt-[1px] 2xl:mt-[2px] ${
          selectedBranch === branch ? "fill-white" : "fill-[#F30000]"
        }`}
        viewBox="0 0 12 16"
      >
        <path d="M5.99772 0C2.80256 0 0.203125 2.59944 0.203125 5.79456C0.203125 9.75981 5.38872 15.581 5.6095 15.8269C5.81687 16.0579 6.17894 16.0575 6.38594 15.8269C6.60672 15.581 11.7923 9.75981 11.7923 5.79456C11.7922 2.59944 9.19284 0 5.99772 0ZM5.99772 8.70997C4.39016 8.70997 3.08234 7.40213 3.08234 5.79456C3.08234 4.187 4.39019 2.87919 5.99772 2.87919C7.60525 2.87919 8.91306 4.18703 8.91306 5.79459C8.91306 7.40216 7.60525 8.70997 5.99772 8.70997Z" />
      </svg>
    ),
    phone: (
      <svg
        className={`w-[12px] lg:w-[14px] 2xl:w-[16px] aspect-square mt-[1px] 2xl:mt-[2px] ${
          selectedBranch === branch ? "fill-white" : "fill-[#F30000]"
        }`}
        viewBox="0 0 16 16"
      >
        <path d="M15.5032 12.0936C14.804 11.3944 14.1067 10.6952 13.4075 9.99789C12.853 9.41521 12.1257 9.41521 11.543 9.99789C11.1069 10.4339 10.669 10.87 10.2329 11.3079C10.1164 11.4245 10.0281 11.4245 9.88332 11.3662C9.6202 11.1914 9.30066 11.0749 9.03751 10.9001C7.78574 10.1144 6.70875 9.09381 5.77647 7.92848C5.31034 7.34581 4.90247 6.73495 4.61113 6.03576C4.55287 5.89103 4.55287 5.80269 4.6694 5.68616C5.13553 5.27829 5.54341 4.84224 5.97946 4.46256C6.5922 3.8517 6.5922 3.1525 5.97946 2.54164C5.60166 2.16197 5.28026 1.84244 4.93255 1.49285C4.55287 1.11505 4.20327 0.765455 3.85368 0.415847C3.30107 -0.138616 2.57182 -0.138616 1.99102 0.415847C1.55309 0.851908 1.11704 1.28797 0.679087 1.72591C0.271236 2.13377 0.068228 2.6281 0.00995039 3.18258C-0.0483042 4.08476 0.154681 4.95877 0.476079 5.80269C1.11704 7.57888 2.10755 9.09381 3.30107 10.5204C4.90247 12.4432 6.85346 13.9863 9.09579 15.0652C10.1164 15.5313 11.1652 15.9392 12.2704 15.9975C13.0861 16.0257 13.7571 15.8227 14.3097 15.2099C14.6875 14.8021 15.1254 14.4243 15.5032 14.0164C16.0859 13.4037 16.0859 12.6763 15.5032 12.0936Z" />
      </svg>
    ),
    email: (
      <svg
        className={`w-[12px] lg:w-[14px] 2xl:w-[16px] aspect-square mt-[1px] 2xl:mt-[2px] ${
          selectedBranch === branch ? "fill-white" : "fill-[#F30000]"
        }`}
        viewBox="0 0 16 16"
      >
        <path d="M9.33716 9.80206C8.93909 10.0674 8.47672 10.2077 8 10.2077C7.52331 10.2077 7.06094 10.0674 6.66287 9.80206L0.106531 5.43103C0.0701562 5.40678 0.0347187 5.3815 0 5.3555V12.5179C0 13.3391 0.666406 13.9908 1.47291 13.9908H14.5271C15.3482 13.9908 16 13.3244 16 12.5179V5.35547C15.9652 5.38153 15.9297 5.40688 15.8932 5.43116L9.33716 9.80206Z" />
        <path d="M0.626562 4.65131L7.18291 9.02238C7.43109 9.18784 7.71553 9.27056 7.99997 9.27056C8.28444 9.27056 8.56891 9.18781 8.81709 9.02238L15.3734 4.65131C15.7658 4.38991 16 3.95241 16 3.48022C16 2.66831 15.3395 2.00781 14.5276 2.00781H1.47241C0.660531 2.00784 0 2.66834 0 3.481C0 3.95241 0.23425 4.38991 0.626562 4.65131Z" />
      </svg>
    ),
    contactNumber: (
      <svg
        className={`w-[12px] lg:w-[14px] 2xl:w-[16px] aspect-square mt-[1px] 2xl:mt-[2px] ${
          selectedBranch === branch ? "fill-white" : "fill-[#F30000]"
        }`}
        viewBox="0 0 16 16"
      >
        <path d="M11.8855 5.13086L11.853 5.59086C11.8451 5.70016 11.8708 5.80926 11.9266 5.90354C11.9825 5.99782 12.0658 6.07277 12.1655 6.11836C13.058 6.52586 15.4155 7.41836 15.6805 5.58586L11.8855 5.13086Z" />
        <path d="M4.08694 4.63578L4.04194 4.00078C4.03643 3.92395 4.04684 3.8468 4.07251 3.77418C4.09818 3.70155 4.13856 3.63499 4.19112 3.57868C4.24367 3.52237 4.30729 3.4775 4.37797 3.44689C4.44866 3.41628 4.52491 3.40058 4.60194 3.40078H11.4044C11.4813 3.40093 11.5572 3.41688 11.6276 3.44764C11.698 3.4784 11.7613 3.52332 11.8136 3.5796C11.8659 3.63587 11.9061 3.70231 11.9316 3.77477C11.9571 3.84722 11.9674 3.92416 11.9619 4.00078L11.9169 4.64578L15.7144 5.10078C15.7144 4.90078 15.7144 4.71328 15.7144 4.53328C15.7369 3.73213 15.4707 2.94959 14.9644 2.32828C14.4699 1.76601 13.8257 1.35591 13.1069 1.14578C11.8269 0.700781 10.1369 0.613281 8.00194 0.613281C5.86694 0.613281 4.17694 0.700781 2.87444 1.13578C2.1557 1.34591 1.5115 1.75601 1.01694 2.31828C0.510665 2.93959 0.244495 3.72213 0.266937 4.52328V5.09078L4.08694 4.63578Z" />
        <path d="M4.15196 5.59086L4.11946 5.13086L0.324463 5.58586C0.574463 7.42086 2.94696 6.52586 3.83946 6.11836C3.93911 6.07277 4.02245 5.99782 4.0783 5.90354C4.13415 5.80926 4.15986 5.70016 4.15196 5.59086Z" />
        <path d="M8.10137 9.02533C7.69595 8.9944 7.29073 9.08777 6.93972 9.293C6.58872 9.49823 6.3086 9.80557 6.13672 10.1741C5.96483 10.5425 5.90934 10.9547 5.97764 11.3555C6.04593 11.7563 6.23478 12.1268 6.519 12.4176C6.80321 12.7083 7.1693 12.9055 7.56847 12.983C7.96763 13.0604 8.38091 13.0143 8.75321 12.8508C9.12551 12.6874 9.43915 12.4143 9.65232 12.0681C9.86549 11.7218 9.96806 11.3189 9.94637 10.9128C9.92046 10.4278 9.71895 9.96884 9.37944 9.62151C9.03994 9.27419 8.58565 9.06228 8.10137 9.02533Z" />
        <path d="M11.2692 6.75032V5.88782C11.2732 5.51627 11.1296 5.15832 10.8699 4.89256C10.6102 4.62679 10.2557 4.47493 9.88418 4.47032L9.85918 6.73532L6.12168 6.69282L6.14668 4.42782C5.77513 4.42381 5.41718 4.56741 5.15142 4.82708C4.88565 5.08676 4.73379 5.44128 4.72918 5.81282V6.67532C4.13726 6.66887 3.56204 6.87141 3.10475 7.2473C2.64746 7.6232 2.33741 8.14834 2.22918 8.73032L1.32418 13.6103C1.287 13.8113 1.2942 14.018 1.34527 14.2159C1.39635 14.4138 1.49006 14.5981 1.61985 14.756C1.74964 14.9139 1.91237 15.0415 2.09665 15.1299C2.28093 15.2183 2.4823 15.2654 2.68668 15.2678L13.1142 15.3878C13.3185 15.39 13.5208 15.3476 13.7069 15.2635C13.8931 15.1794 14.0587 15.0556 14.192 14.9008C14.3253 14.746 14.4233 14.564 14.4789 14.3674C14.5346 14.1709 14.5466 13.9645 14.5142 13.7628L13.7217 8.86032C13.6264 8.27629 13.3283 7.74456 12.8797 7.35863C12.4312 6.97271 11.8609 6.75731 11.2692 6.75032ZM5.83668 13.5603C5.66635 13.4449 5.51957 13.2981 5.40418 13.1278C5.07566 12.6788 4.85894 12.1578 4.77198 11.6083C4.68503 11.0587 4.73035 10.4964 4.90418 9.96782C5.1548 9.24271 5.65516 8.63037 6.3158 8.2403C6.97643 7.85022 7.75427 7.70783 8.51025 7.83859C9.26623 7.96934 9.95105 8.36472 10.4423 8.95403C10.9335 9.54333 11.1992 10.2882 11.1917 11.0553C11.1517 13.5003 8.39418 15.2953 5.83668 13.5603Z" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-wrap items-start mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
      {icons[type] || icons.address}
      <span className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[1.4] font-normal text-white w-[calc(100%-12px)] lg:w-[calc(100%-14px)] 2xl:w-[calc(100%-16px)] pl-[10px] lg:pl-12px">
        {item}
      </span>
    </div>
  );
}

export default function BranchLocationMap() {
  const [selectedBranch, setSelectedBranch] = useState(branchLocations[0]);
  const [mapCenter] = useState([9.9312, 76.2673]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component renders only on the client
  }, []);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  if (!isMounted) return <div>Loading map...</div>;

  return (
    <div className="w-full h-auto sm:h-[510px] 2xl:h-[670px] relative z-1 flex flex-wrap sm:rounded-[16px] overflow-hidden">
      <div className="w-full sm:w-[calc(100%-220px)] lg:w-[calc(100%-260px)] xl:w-[calc(100%-320px)] 2xl:w-[calc(100%-420px)] max-sm:h-[468px] h-full relative z-0">
        <MapContainer
          center={mapCenter}
          zoom={12}
          className="absolute z-0 inset-0"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <MapController selectedBranch={selectedBranch} />
        </MapContainer>
      </div>
      <div className="w-full sm:w-[220px] lg:w-[260px] xl:w-[320px] 2xl:w-[420px] sm:h-full bg-base1 relative z-0 max-sm:shadow-[0_0_25px_0_rgba(238,56,36,0.20)] before:absolute before:inset-0 before:top-auto before:z-2 before:block before:bg-gradient-to-t before:to-transparent before:from-base1 before:w-full before:h-[20px] lg:before:h-[30px] before:pointer-events-none">
        <h2 className="text-[16px] lg:text-[18px] 2xl:text-[22px] text-white font-bold p-[10px_20px] sm:p-[5px_10px] lg:p-[10px_15px] 2xl:p-[15px_30px] border-b-[1px] border-solid border-white/80">
          20 Branches Near You
        </h2>
        <div className="overflow-y-auto max-h-[280px] sm:max-h-[calc(100%-49px)] lg:max-h-[calc(100%-49px)] 2xl:max-h-[calc(100%-65px)]">
          {branchLocations.map((branch) => (
            <div
              key={branch.id}
              className={`p-[10px_20px] sm:p-[10px_10px] lg:p-[20px_15px] 2xl:p-[20px_30px] cursor-pointer border-b-[1px] border-solid border-white/10 loclist ${
                selectedBranch.id === branch.id
                  ? "bg-[#f30000] active"
                  : "hover:bg-blue-700"
              }`}
              onClick={() => handleBranchClick(branch)}
            >
              <div className="flex items-center justify-between mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                <h3 className="text-[14px] lg:text-[16px] 2xl:text-[18px] leading-[1] line-clamp-1 text-white font-bold">
                  {branch.name}
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates[0]},${branch.coordinates[1]}`}
                  target="_blank"
                  className="text-[10px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white bg-none transition-colors flex items-center gap-[4px] 2xl:gap-[6px]"
                >
                  <span>Get Direction</span>
                  <svg
                    className={`w-[12px] lg:w-[14px] 2xl:w-[16px] aspect-square ${
                      selectedBranch.id === branch.id ? "fill-white" : ""
                    }`}
                    fill="#F30000"
                    viewBox="0 0 16 16"
                  >
                    <g clipPath="url(#clip0_675_52729)">
                      <path d="M4.01148 8.48633H3.29395C3.10571 8.48633 2.93579 8.59839 2.86133 8.771L0.875 13.3961L5.59229 10.9868C5.02759 10.2054 4.46887 9.34363 4.01148 8.48633Z" />
                      <path d="M13.1376 8.771C13.0632 8.59839 12.8932 8.48633 12.7051 8.48633H11.9876C11.1238 10.105 9.86536 11.7777 9.06482 12.698C8.50183 13.3438 7.49622 13.343 6.93408 12.698C6.87659 12.632 6.57642 12.2844 6.16296 11.75L5.3125 12.1846L8.52954 15.3954L14.6252 12.2352L13.1376 8.771Z" />
                      <path d="M0.295042 14.7482L0.0384505 15.3457C-0.094362 15.6549 0.133177 16.0002 0.470946 16.0002H7.37878C7.422 15.9681 7.42248 15.9701 7.65442 15.8499L4.43262 12.6348L0.295042 14.7482Z" />
                      <path d="M15.9619 15.3459L14.998 13.1016L9.40625 16.0005H15.5294C15.8665 16.0005 16.095 15.6558 15.9619 15.3459Z" />
                      <path d="M8.47241 4.22937C8.47241 3.97034 8.26123 3.75977 8.00183 3.75977C7.74231 3.75977 7.53125 3.97034 7.53125 4.22937C7.53125 4.48828 7.74231 4.69897 8.00183 4.69897C8.26123 4.69897 8.47241 4.48828 8.47241 4.22937Z" />
                      <path d="M8.35584 12.0506C8.51428 11.8687 12.2358 7.56373 12.2358 4.6045C12.2358 -1.49755 3.76562 -1.57201 3.76562 4.6045C3.76562 7.56373 7.48718 11.8687 7.64563 12.0506C7.83325 12.2658 8.16858 12.2655 8.35584 12.0506ZM6.58899 4.22889C6.58899 3.45204 7.22229 2.82008 8.00073 2.82008C8.77905 2.82008 9.41235 3.45204 9.41235 4.22889C9.41235 5.00563 8.77905 5.63759 8.00073 5.63759C7.22229 5.63759 6.58899 5.00563 6.58899 4.22889Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_675_52729">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              {branch.address && (
                <BranchLocationsInfo
                  type="address"
                  item={branch.address}
                  selectedBranch={selectedBranch.id}
                  branch={branch.id}
                />
              )}
              {branch.phone && (
                <BranchLocationsInfo
                  type="phone"
                  item={branch.phone}
                  selectedBranch={selectedBranch.id}
                  branch={branch.id}
                />
              )}
              {branch.phone && (
                <BranchLocationsInfo
                  type="email"
                  item={branch.email}
                  selectedBranch={selectedBranch.id}
                  branch={branch.id}
                />
              )}
              {branch.contactNumber && (
                <BranchLocationsInfo
                  type="contactNumber"
                  item={branch.contactNumber}
                  selectedBranch={selectedBranch.id}
                  branch={branch.id}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
