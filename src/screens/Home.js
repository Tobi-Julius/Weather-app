import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  fetchLocation,
  setCoords,
  fetchForecast,
  fetchSport,
} from "../Redux/action/locationAction";
import { useSelector, useDispatch } from "react-redux";
import { Theme } from "../constants/Theme";
import { Error, HomeDetail } from "../component/page";

export const Home = () => {
  const [locationGranted, setLocationGranted] = useState(false);
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.allData);

  useEffect(() => {
    const _startLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationGranted(true);
      } else {
        setLocationGranted(false);
      }
      const locationEncode = await Location.getCurrentPositionAsync({});

      setLocation(
        `${locationEncode.coords.latitude}%2C${locationEncode.coords.longitude}`
      );

      dispatch(setCoords(location));
      dispatch(fetchForecast(location));
      dispatch(fetchLocation(location));
      dispatch(fetchSport());
    };

    _startLocation();
  }, [location]);

  return locationGranted ? (
    <View>
      {data.locationData === "" || !data.locationData.location ? (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 10 }}
          color={Theme.backgroundColor}
        />
      ) : (
        <HomeDetail data={data} />
      )}
    </View>
  ) : (
    <Error />
  );
};
