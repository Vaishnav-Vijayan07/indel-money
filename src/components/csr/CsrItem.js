"use client";

import React from "react";
import MobCsrListCard from "../features/csr/MobCsrListCard";
import CsrCard from "../common/CsrCard";
import Link from "next/link";

function BlogItem({ item, index, type = "csr" }) {
  
  return (
    <div key={index} className="w-full md:w-1/2 p-[6px_4px] lg:p-[10px_15px] 2xl:p-[30px_35px]">
      <div className="sm:hidden block">
        <MobCsrListCard item={item} />
      </div>
      <div className="sm:block hidden">
        <Link href={`/${type}/${item?.slug}`}>
          <CsrCard item={item} />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
