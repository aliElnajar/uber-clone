import { useGeneralContext } from "../../store&providers/ContextStore";

const DriverEstimatedArrival = ({ secondsLeft }) => {
  const { confirmingRideHandler } = useGeneralContext();
  return (
    <>
      <h6 className="hidden lg:inline-block lg:text-l">will be here in</h6>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-l">
            <span style={{ "--value": 0 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-l ">
            <span style={{ "--value": secondsLeft }}></span>
          </span>
          sec
        </div>
        <button
          onClick={() => confirmingRideHandler(false)}
          className="bg-red-800 p-2 rounded-lg font-semibold"
        >
          cancel trip
        </button>
      </div>
    </>
  );
};

export default DriverEstimatedArrival;
