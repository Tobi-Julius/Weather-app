import { actionTypes } from "../constants/actionTypes";
import { fetchData, weatherOptions } from "../../utils/fetchData";

export const fetchLocation = (location) => async (dispatch) => {
  await fetchData(`/current.json?q=${location}`, weatherOptions)
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_LOCATION_DATA, payload: res });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.FETCH_LOCATION_DATA, payload: err });
    });
};

export const fetchForecast = (location) => async (dispatch) => {
  await fetchData(`/forecast.json?q=${location}&days=2`, weatherOptions)
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_FORECAST_DATA, payload: res });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.FETCH_FORECAST_DATA, payload: err });
    });
};
export const setCoords = (latlon) => {
  return {
    type: actionTypes.COORDS,
    payload: latlon,
  };
};
