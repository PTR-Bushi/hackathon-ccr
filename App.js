import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "react-native";

const App = ({}) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
