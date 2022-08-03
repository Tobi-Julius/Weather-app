import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { HourChart } from "./HourChart";
import { ForecastBody } from "./ForecastBody";
import { ForecastHead } from "./ForecastHead";
import { Theme } from "../../constants/Theme";

export const ForecastDetail = ({ data }) => {
  const dataLocation = data?.forecastData?.location;
  const dataDetail = data?.forecastData.forecast?.forecastday[1];
  const hour = data?.forecastData.forecast?.forecastday[1].hour;

  return data.forecastData.location ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Theme.lightColor,
        height: "100%",
      }}
    >
      <ForecastHead data={dataLocation} />
      <ForecastBody data={dataDetail} />
      <HourChart data={hour} />
    </ScrollView>
  ) : (
    <ActivityIndicator size={24} color={Theme.backgroundColor} />
  );
};

const styles = StyleSheet.create({});
