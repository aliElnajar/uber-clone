const defaultAddress = {
  address: "",
  city: "",
  country: "",
};

export const initialState = {
  rideChoosen: null,
  confirmRide: false,
  foundDriver: false,
  locationAddress: defaultAddress,
  destinationAddress: defaultAddress,
 
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "RIDE_CHOOSEN":
      return { ...state, rideChoosen: action.payload };
    case "CONFIRMED_THE_RIDE":
      return { ...state, confirmRide: true };
    case "UNCONFIRMED_THE_RIDE":
      return { ...state, confirmRide: false, foundDriver: false };
    case "FOUNDED_DRIVER":
      return { ...state, foundDriver: true };
    case "CHANGE_IN_LOCATION":
      return {
        ...state,
        locationAddress: {
          ...state.locationAddress,
          [action.payload.name]: action.payload.value,
        },
      };
    case "CHANGE_IN_DESTINATION":
      return {
        ...state,
        destinationAddress: {
          ...state.destinationAddress,
          [action.payload.name]: action.payload.value,
        },
      };
    case "RESET_LOCATION_DESTINATION":
      return {
        ...state,
        destinationAddress: defaultAddress,
        locationAddress: defaultAddress,
      };
    default:
      return { ...initialState };
  }
};
