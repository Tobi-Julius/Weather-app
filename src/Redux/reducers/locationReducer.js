import { actionTypes } from "../constants/actionTypes";

const initialState = {
  locationData: {},
  forecastData: [],
  coords:""
};

export const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_LOCATION_DATA:
      return { ...state, locationData: payload };

    case actionTypes.FETCH_FORECAST_DATA:
      return { ...state, forecastData: payload };

    case actionTypes.COORDS:
      return { ...state, coords: payload };

    default:
      return state;
  }
};
