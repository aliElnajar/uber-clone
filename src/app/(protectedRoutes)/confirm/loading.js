import React from "react";

const loading = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col space-y-7 items-center justify-center -mt-[30px] md:mt-0">
      <h3 className="text-2xl font-semibold italic">just a second</h3>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default loading;
