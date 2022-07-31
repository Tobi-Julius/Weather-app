import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common";
import { Theme } from "../../constants/Theme";

const TopComponent = () => {
  return (
    <View
      style={{
        flex: 0.07,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 10,
      }}
    >
      <Text
        textStyle={{ fontWeight: "900", fontSize: 30, color: "#3a1212" }}
        text="Weather ☁"
      />
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({});
