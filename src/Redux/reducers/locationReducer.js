import { actionTypes } from "../constants/actionTypes";

const initialState = {
  locationData: {},
  coords: ""
};

export const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOCATION_DATA:
      return { ...state, locationData: payload };

    case actionTypes.FETCH_LOCATION_DATA:
      return { ...state, locationData: payload };

    default:
      return state;
  }
};
