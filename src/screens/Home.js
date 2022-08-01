import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { fetchLocation } from "../Redux/action/locationAction";
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
    };
    _startLocation();
    dispatch(fetchLocation(location));
  }, [location]);

  return locationGranted ? (
    <View>
      {data.locationData === "" || !data.locationData.location ? (
        <ActivityIndicator size="large" color={Theme.backgroundColor} />
      ) : (
        <HomeDetail data={data} />
      )}
    </View>
  ) : (
      <Error />
  );
};

const styles = StyleSheet.create({});
