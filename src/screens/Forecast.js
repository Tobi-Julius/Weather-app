import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Error, ForecastDetail } from "../component/page";
import { Theme } from "../constants/Theme";

export const Forecast = () => {
  const dataFetched = useSelector((state) => state.allData);

  return dataFetched.coords ? (
    <View>
      {dataFetched.forecastData ? (
        <ForecastDetail data={dataFetched} />
      ) : (
        <ActivityIndicator size={24} color={Theme.backgroundColor} />
      )}
    </View>
  ) : (
    <Error />
  );
};

const styles = StyleSheet.create({});
