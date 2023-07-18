import CarCard from "./CarCard";
import { ridesDataArr } from "../../utils/rideData";
import UserActions from "./UserActions";
import { useGeneralContext } from "../../store&providers/ContextStore";
const ChoosingCar = ({ distance }) => {
  const { rideChoosen, confirmingRideHandler } = useGeneralContext();
  return (
    <div className="flex flex-col  h-[50svh]">
      <UserActions />
      <div className="flex-1 flex flex-col space-y-3 overflow-y-scroll  ">
        {ridesDataArr.map((ride, i) => (
          <CarCard
            key={i}
            title={ride.title}
            img={ride.img}
            price={Math.ceil(ride.ratio * distance)}
          />
        ))}
      </div>
      <button
        disabled={!rideChoosen}
        className="btn-custom my-1 flex-0.5 "
        onClick={() => confirmingRideHandler(true)}
      >
        Confirm {rideChoosen}
      </button>
    </div>
  );
};

export default ChoosingCar;
