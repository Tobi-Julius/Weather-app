import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
import { Theme } from "../../constants/Theme";
import { Text } from "../common";

export const HourChart = ({ data }) => {
  const dataChart = {
    labels: data?.map((each) => each.time.slice(11, 13)),

    datasets: [
      {
        data: data?.map((each) => each.temp_c),
      },
    ],
  };

  return (
    <View>
      {data ? (
        <LineChart
          yAxisLabel="°c "
          data={dataChart}
          width={Dimensions.get("window").width}
          height={300}
          chartConfig={{
            backgroundColor: Theme.backgroundColor,
            backgroundGradientFrom: Theme.lightColor,
            backgroundGradientTo: Theme.backgroundColor,
            decimalPlaces: 2,
            color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: Theme.lightColor,
            },
          }}
          bezier
        />
      ) : (
        <Text />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
