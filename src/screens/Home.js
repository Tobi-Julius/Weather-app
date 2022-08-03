import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  fetchLocation,
  setCoords,
  fetchForecast,
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

      dispatch(
        setCoords(
          `${locationEncode.coords.latitude}%2C${locationEncode.coords.longitude}`
        )
      );

      setLocation(
        `${locationEncode.coords.latitude}%2C${locationEncode.coords.longitude}`
      );

      dispatch(fetchForecast(location));
    };

    _startLocation();
    dispatch(fetchLocation(location));
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
