import { StyleSheet, Text, View, StatusBar } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopNavigation from "./TopNavigation/TopNavigation";
import TopComponent from "./component/TopComponent";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="purple" />
      <TopComponent />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TopNavigation" component={TopNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
