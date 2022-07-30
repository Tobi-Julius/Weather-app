import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home, Forecast, Sport } from "../screens";

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "powderblue" },
        tabBarLabelStyle:{},
        tabBarPressColor: "red",
      }}
      initialRouteName="TopNavigation"
    >
      <Tab.Screen
        //   options={{
        //     tabBarIcon: ({ color }) => (

        //   )
        // }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Forecast" component={Forecast} />
      <Tab.Screen name="Sport" component={Sport} />
    </Tab.Navigator>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({});
