import Link from "next/link";
import BackButton from "./BackButton";
import AddressAutoComplete from "./AddressAutofill";
import ValuesIn from "lodash.valuesin";
import { useGeneralContext } from "@/store&providers/ContextStore";

const Form = () => {
  const { inputChangeHandler, locationAddress, destinationAddress } =
    useGeneralContext();

  const pickupStr = ValuesIn(locationAddress).join("");
  const dropoffStr = ValuesIn(destinationAddress).join("");

  return (
    <>
      <form className=" flex flex-col mx-auto space-y-10 pt-20 bg-gray-100 h-[100vh]">
        <BackButton />
        <div className="flex flex-col space-y-3 w-[70%] md:w-[30%] mx-auto">
          <AddressAutoComplete section="location">
            <input
              className="input w-full max-w-md "
              name="address"
              value={locationAddress.address}
              placeholder="pickup Address"
              autoComplete="address-line1"
              onChange={(e) => inputChangeHandler(e, "location")}
            />
          </AddressAutoComplete>
          <AddressAutoComplete>
            <input
              className="input w-full max-w-md  "
              name="address"
              value={destinationAddress.address}
              placeholder="dropoff Address"
              autoComplete="address-line1"
              onChange={(e) => inputChangeHandler(e)}
            />
          </AddressAutoComplete>
        </div>
        <button
          type="button"
          disabled={!pickupStr & !dropoffStr}
          className="btn-custom "
        >
          <Link
            href={{
              pathname: "/confirm/",
              query: {
                pickup: pickupStr,
                dropoff: dropoffStr,
              },
            }}
          >
            confirm my ride
          </Link>
        </button>
      </form>
    </>
  );
};

export default Form;
