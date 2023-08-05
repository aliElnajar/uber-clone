import { useGeneralContext } from "../../store&providers/ContextStore";
import { useQueryClient } from "@tanstack/react-query";

const CarCard = ({ title, img, rideRatio }) => {
  const queryClient = useQueryClient();
  const distance = queryClient.getQueryData(["distance"]);
  const price = distance ? Math.ceil(rideRatio * distance) : "--";

  const { rideChoosen, choosingRideHandler } = useGeneralContext();
  const choosenStyles =
    title === rideChoosen ? "bg-gray-200 hover:bg-gray-200" : "";
  return (
    <button
      onClick={() => {
        if (title === rideChoosen) return;
        choosingRideHandler(title);
      }}
      className={`flex flex-row items-center py-2 px-3 hover:bg-gray-100 ${choosenStyles}`}
    >
      <img src={img.src} className="h-[55px] w-[100px] mr-3" alt="car-image" />
      <div className="flex-1 text-left">
        <h2>{title}</h2>
        <p className="text-sm text-blue-400">less than minute away</p>
      </div>
      <p className="text-sm font-semibold italic ">
        {price}
        {/* {isNaN(price) ? "--" : `${price} EGP`} */}
      </p>
    </button>
  );
};

export default CarCard;
