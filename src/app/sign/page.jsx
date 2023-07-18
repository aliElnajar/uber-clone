"use client";
import React from "react";
import signSVG from "../../../public/signSvg.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
const page = () => {
  return (
    <div className="bg-slate-50 h-screen flex flex-col space-y-7 items-center justify-center">
      <h2 className="text-3xl font-bold ">
        Welcome to
        <br />
        <span className="text-4xl">Uber</span>
      </h2>
      <Image src={signSVG} alt="carsvg" className="w-[300px] h-[200px]" />
      <button className="btn-custom" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
};

export default page;
