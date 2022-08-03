import { View } from "react-native";
import { Text } from "../common";
import React from "react";
import { EvilIcons, Entypo } from "@expo/vector-icons";

export const ForecastHead = ({ data }) => {
  const { name, region, country, localtime } = data;

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: "7%",
        padding: 20,
      }}
    >
      <View>
        <View>
          <EvilIcons name="location" size={24} color="black" />
          <Text
            textStyle={{ fontSize: 16, fontWeight: "bold" }}
            text={`${name}, ${region}`}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Entypo name="location" size={24} color="black" />
          <Text
            textStyle={{ fontSize: 16, fontWeight: "bold" }}
            text={country}
          />
        </View>
      </View>

      <View>
        <Text
          textStyle={{ fontSize: 16, fontWeight: "bold" }}
          text={`Date: ${localtime.slice(0, 10)}`}
        />
      </View>
    </View>
  );
};
