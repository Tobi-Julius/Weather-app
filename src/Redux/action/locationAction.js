import { actionTypes } from "../constants/actionTypes";
import { fetchData, weatherOptions } from "../../utils/fetchData";

export const fetchLocation = (location) => async (dispatch) => {
  await fetchData(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
    weatherOptions
  )
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_LOCATION_DATA, payload: res });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.FETCH_LOCATION_DATA, payload: err });
    });
};
export const setLocation = (data) => {
  return {
    type: actionTypes.SET_LOCATION_DATA,
    payload: data,
  };
};
