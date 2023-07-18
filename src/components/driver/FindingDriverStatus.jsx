import { useEffect } from "react";
import DriverProfile from "./DriverProfile";
import LookingForDriver from "./LookingForDriver";
import { useGeneralContext } from "../../store&providers/ContextStore";
const FindingDriver = () => {
  const { foundDriver, findingDriverHandler } = useGeneralContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      findingDriverHandler(true);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  let content = <LookingForDriver />;

  if (foundDriver) {
    return <DriverProfile />;
  }

  return <div className="h-[50vh]">{content}</div>;
};

export default FindingDriver;
