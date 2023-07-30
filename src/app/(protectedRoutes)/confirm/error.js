"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
 

  return (
    <div className="bg-slate-500 h-screen flex flex-col space-y-5 items-center justify-center">
      <h2 className="text-2xl font-semibold text-white">
        Something went wrong!
      </h2>
      <button className="btn btn-error " onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
