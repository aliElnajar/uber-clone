import { useState, useEffect } from "react";
import DriverEstimatedArrival from "./DriverEstimatedArrival";
const DriverArriveTime = () => {
  const [secondsLeft, setSecondsLeft] = useState(30);
  useEffect(() => {
    if (!secondsLeft) return;
    const countDown = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    () => clearTimeout(countDown);
  }, [secondsLeft]);

  let content = <DriverEstimatedArrival secondsLeft={secondsLeft} />;

  if (!secondsLeft) {
    content = (
      <h3 className="font-bold uppercase text-sm tracking-wider">
        driver have arrived
      </h3>
    );
  }

  return (
    <div className="bg-neutral-800 text-white p-1 md:p-3 rounded flex space-x-3 items-center">
      {content}
    </div>
  );
};

export default DriverArriveTime;
