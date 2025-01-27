"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  return (
    <div className="">
      <div>error page</div>

      <Error />
    </div>
  );
}
