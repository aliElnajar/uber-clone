import DriverRating from "./DriverRating";
import DriverArriveTime from "./DriverArrivalStatus";
import DriverCar from "./DriverCar";
import TripDiagram from "./TripDiagram";
import { ridesDataArr } from "../../utils/rideData";
import { useGeneralContext } from "../../store&providers/ContextStore";
const DriverProfile = () => {
  const { rideChoosen } = useGeneralContext();
  const { img, rideModel, driverPicture, driverName } = ridesDataArr.filter(
    (ride) => ride.title === rideChoosen
  )[0];
  return (
    <section className="bg-slate-50 h-[50vh] overflow-y-scroll  flex flex-col items-center ">
      <div className="h-[12vh] md:h-[14vh]">
        <DriverCar carDetailts={{ img, rideModel }} />
      </div>
      <div className=" p-4 border-y border-gray-200 flex-container">
        <div className="avatar">
          <div className="w-[110px] rounded avatar">
            <img src={driverPicture} />
          </div>
        </div>
        <section className="h-[14vh] md:h-[16vh]">
          <h3 className="font-xl font-bold italic">{driverName}</h3>
          <DriverRating />
          <DriverArriveTime />
        </section>
      </div>
      <TripDiagram />
    </section>
  );
};

export default DriverProfile;
