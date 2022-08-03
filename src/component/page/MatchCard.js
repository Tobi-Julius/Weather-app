import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common";
import { Theme } from "../../constants/Theme";

export const MatchCard = ({ data, index }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        shadowColor: "purple",
        shadowOpacity: 1,
        shadowOffset: { width: 4, height: 16 },
        shadowRadius: 16,
        elevation: 5,
      }}
      key={index}
    >
      <View
        style={{
          backgroundColor: Theme.lightColor,
          width: "100%",
          paddingTop: "3%",
          paddingBottom: "3%",
          paddingLeft: 6,
          marginTop: ".6%",
        }}
      >
        <View>
          <View>
            <Text
              textStyle={{ color: "#fff", fontWeight: "bold" }}
              text={`${data.tournament}, ${data.country}`}
            />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Text
              textStyle={{ color: "#fff" }}
              text={data.start.slice(11, 16)}
            />
            <Text textStyle={{ color: "#fff" }} text={data.match} />
            <Text text />
          </View>
          <Text Tex="ska ca" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
