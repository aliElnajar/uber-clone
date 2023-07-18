import FindingDriverStatus from "./driver/FindingDriverStatus";
import ChoosingCar from "./ridetype/ChoosingCar";
import { useGeneralContext } from "../store&providers/ContextStore";
const UberRides = ({ distance }) => {
  const { confirmRide } = useGeneralContext();
  let content = <ChoosingCar distance={distance} />;

  if (confirmRide) {
    content = <FindingDriverStatus />;
  }

  return <main className="flex flex-col h-[50vh] bg-slate-50">{content}</main>;
};

export default UberRides;
