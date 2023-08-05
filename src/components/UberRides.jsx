import FindingDriverStatus from "./driver/waitingAndCanceling/FindingDriverStatus";
import ChoosingCar from "./ridetype/ChoosingCar";
import { useGeneralContext } from "../store&providers/ContextStore";
const UberRides = () => {
  const { confirmRide } = useGeneralContext();
  let content = <ChoosingCar />;

  if (confirmRide) {
    content = <FindingDriverStatus />;
  }

  return <main className="flex flex-col h-[50vh] bg-slate-50">{content}</main>;
};

export default UberRides;
