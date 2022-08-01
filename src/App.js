import { StatusBar } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopNavigation from "./TopNavigation/TopNavigation";
import { TopComponent } from "./component/page";
import { Theme } from "./constants/Theme";
import { Provider } from "react-redux";
import store from "./Redux/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={Theme.backgroundColor} />
        <TopComponent />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TopNavigation" component={TopNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

registerRootComponent(App);
