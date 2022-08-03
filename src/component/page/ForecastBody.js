import { Image, View } from "react-native";
import React from "react";
import { Text } from "../common";

export const ForecastBody = ({ data }) => {
  const {
    maxtemp_c,
    mintemp_c,
    avghumidity,
    avgtemp_c,
    daily_chance_of_rain,
    daily_chance_of_snow,
  } = data.day;
  const { sunrise, sunset, moonrise, moonset, moonphase } = data.astro;
  const { text, icon } = data.day.condition;

  return (
    <View>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={{
            uri: `https://${icon}`,
          }}
          style={{ width: 80, height: 80 }}
        />
        <Text text={text} />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          padding: 8,
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Max temp: ${maxtemp_c}°C`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Rain chances: ${daily_chance_of_rain}%`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Avg humidity: ${avghumidity}`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Sunrise: ${sunrise}`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Moonrise: ${moonrise}`}
          />
        </View>
        <View>
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Min temp: ${mintemp_c}°C`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Snow chances: ${daily_chance_of_snow}%`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Avg temp: ${avgtemp_c}°C`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Sunset: ${sunset}`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={`Moonset: ${moonset}`}
          />
          <Text
            textStyle={{ marginTop: 4, fontSize: 15, fontWeight: "bold" }}
            text={moonphase}
          />
        </View>
      </View>
    </View>
  );
};
