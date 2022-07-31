import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home, Forecast, Sport } from "../screens";
import Account from "../screens/Account";
import { Theme } from "../constants/Theme";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarItemStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarContentContainerStyle: {
          borderColor: "red",
          borderWidth: 0,
        },
        tabBarStyle: {
          backgroundColor: Theme.lightColor,
          border: 1,
          borderColor: "red",
          borderWidth: 0,
        },
        tabBarIndicatorStyle: {
          border: 1,
          borderColor: Theme.backgroundColor,
          borderWidth: 1,
        },
        tabBarLabelStyle: {
          color: Theme.Text,
          fontSize: 10,
          textTransform: "capitalize",
        },
        tabBarPressColor: Theme.backgroundColor,
      }}
      initialRouteName="TopNavigation"
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <AntDesign color="white" size={20} name="home" />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Forecast"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              color="white"
              size={20}
              name="weather-night-partly-cloudy"
            />
          ),
        }}
        component={Forecast}
      />
      <Tab.Screen
        name="Sport"
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              color="white"
              style={{ marginTop: 3 }}
              size={20}
              name="sports"
            />
          ),
        }}
        component={Sport}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: () => (
            <EvilIcons
              color="white"
              style={{ marginTop: 3 }}
              size={20}
              name="user"
            />
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({});
