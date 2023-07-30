import { useGeneralContext } from "@/store&providers/ContextStore";
import SingleCancelingReason from "./SingleCancelingReason";
const CancelRideReasons = ({ children }) => {
  const reasonsArray = [
    "waiting time is too long",
    "changed my mind",
    "changing trip",
    "changing ride",
    "prefer not to say",
  ];
  const { confirmingRideHandler } = useGeneralContext();
  return (
    <>
      {children}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="form-control">
            {reasonsArray.map((reason, i) => (
              <SingleCancelingReason key={i} reason={reason} />
            ))}
          </div>
          <div className="modal-action flex items-center justify-around p-4">
            <label className="btn" htmlFor="my_modal_6">
              keep waiting
            </label>
            <label
              htmlFor="my_modal_6"
              className="btn bg-red-800 hover:bg-red-900 text-white"
              onClick={() => confirmingRideHandler(false)}
            >
              cancel the ride
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_6">
          Close
        </label>
      </div>
    </>
  );
};

export default CancelRideReasons;
