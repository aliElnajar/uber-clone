import { useGeneralContext } from "@/store&providers/ContextStore";
import { AddressAutofill } from "@mapbox/search-js-react";

function App({ children, section }) {
  const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const { inputChangeHandler, locationAddress, destinationAddress } =
    useGeneralContext();
  const address = section === "location" ? locationAddress : destinationAddress;
  return (
    <div className="flex flex-col space-y-1 ">
      <AddressAutofill accessToken={access_token}>{children}</AddressAutofill>
      <div className="flex space-x-3">
        <input
          className=" input w-[50%] max-w-md"
          name="city"
          value={address.city}
          placeholder="City"
          autoComplete="address-level2"
          onChange={(e) => inputChangeHandler(e, section)}
        />
        <input
          className=" input w-[50%] max-w-md"
          name="country"
          value={address.country}
          placeholder="Country"
          autoComplete="country-name"
          onChange={(e) => inputChangeHandler(e, section)}
        />
      </div>
    </div>
  );
}

export default App;
