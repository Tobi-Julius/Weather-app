import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "../constants/Theme";
import { MatchCard } from "../component/page";

export const Sport = () => {
  const sportData = useSelector((state) => state.allData.sportData);

  return sportData === [] ? (
    <ActivityIndicator size={24} color={Theme.backgroundColor} />
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: "100%", height: "100%" }}
    >
      {sportData?.football?.map((each, index) => (
        <MatchCard data={each} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
