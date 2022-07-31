import { StyleSheet, View } from "react-native";
import { Text } from "../component/common";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { fetchLocation } from "../Redux/action/locationAction";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native";
import { Theme } from "../constants/Theme";
import Error from "../component/page/Error";
import HomeDetail from "../component/page/HomeDetail";

export const Home = () => {
  const [locationGranted, setLocationGranted] = useState(false);
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.allData);
  console.warn(data);
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
        <HomeDetail />
      )}
    </View>
  ) : (
    <Error />
  );
};

const styles = StyleSheet.create({});
