import Link from "next/link";
import React from "react";
import Image from "next/image";
import gif from "../../public/ErrorGif.gif";

const notFound = () => {
  return (
    <>
      <title>page not found</title>
      <div className="grid place-items-center py-[20px] font-['avro]">
        <h1 className="text-[60px] text-center -mb-[30px] z-30">404</h1>
        <Image
          src={gif}
          className="scale-75 lg:scale-100 w-[600px] h-[450px] z-10"
        />
        <div className="-mt-[40px] z-40 grid place-items-center">
          <h3 className="text-2xl">Look like you're lost</h3>

          <p className="text-lg py-2">
            the page you are looking for not avaible!
          </p>

          <Link href="/" className="btn bg-[#39ac31] hover:bg-slate-300">
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default notFound;
