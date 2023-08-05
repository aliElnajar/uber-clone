"use client";
import CarCard from "./CarCard";
import { ridesDataArr } from "../../utils/rideData";
import UserActions from "./UserActions";
import { useGeneralContext } from "../../store&providers/ContextStore";
const ChoosingCar = () => {
  const { rideChoosen, confirmingRideHandler } = useGeneralContext();
 
  return (
    <div className="flex flex-col h-[50vh] ">
      <div className="h-[10%] ">
        <UserActions />
      </div>
      <div className="h-[75%] flex flex-col space-y-3 overflow-y-scroll  ">
        {ridesDataArr.map((ride, i) => (
          <CarCard
            key={i}
            title={ride.title}
            img={ride.img}
            rideRatio={ride.ratio}
          />
        ))}
      </div>
      <button
        disabled={!rideChoosen}
        className=" bg-black w-[100%] md:w-[50%] mx-auto text-white my-1 flex-0.5 h-1/6 bottom-0 sticky "
        onClick={() => confirmingRideHandler(true)}
      >
        Confirm {rideChoosen}
      </button>
    </div>
  );
};

export default ChoosingCar;
