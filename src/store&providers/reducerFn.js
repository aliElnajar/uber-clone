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
      default:
        return { ...initialState };
    }
  };