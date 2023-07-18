import { useContext, createContext, useReducer } from "react";
import { reducerFn } from "./reducerFn";
export const generalContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const initialState = {
    rideChoosen: null,
    confirmRide: false,
    foundDriver: false,
  };

  const choosingRideHandler = (ride) => {
    dispatch({ type: "RIDE_CHOOSEN", payload: ride });
  };

  const confirmingRideHandler = (confirmed) => {
    confirmed
      ? dispatch({ type: "CONFIRMED_THE_RIDE" })
      : dispatch({ type: "UNCONFIRMED_THE_RIDE" });
  };

  const findingDriverHandler = () => {
    dispatch({ type: "FOUNDED_DRIVER" });
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <generalContext.Provider
      value={{
        ...state,
        choosingRideHandler,
        confirmingRideHandler,
        findingDriverHandler,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(generalContext);
};
