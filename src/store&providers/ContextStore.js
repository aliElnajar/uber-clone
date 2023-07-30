import { useContext, createContext, useReducer } from "react";
import { reducerFn, initialState } from "./reducerFn";
export const generalContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const inputChangeHandler = (e, b) => {
    const { name, value } = e.target;
    if (b === "location") {
      dispatch({ type: "CHANGE_IN_LOCATION", payload: { name, value } });
    } else {
      dispatch({ type: "CHANGE_IN_DESTINATION", payload: { name, value } });
    }
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
        inputChangeHandler,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(generalContext);
};
