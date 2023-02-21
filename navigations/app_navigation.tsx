import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Category, Home, Signup, Welcome,Greatepick } from "../screens";
import { StackParamList } from "../consts";
import { StatusBar } from "react-native";

const Stack = createStackNavigator<StackParamList>();

export default function AppNavigation() {
  StatusBar.setBarStyle("light-content");
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{
          headerShown: true,
          title: "Create account",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          title: "",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
          },
          headerStatusBarHeight: StatusBar.currentHeight,
        }}
      />
      <Stack.Screen
        name="GreatPick"
        component={Greatepick}
        options={{
          headerShown: false,
          title: "",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
          },
          headerStatusBarHeight: StatusBar.currentHeight,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
          },
          headerStatusBarHeight: StatusBar.currentHeight,
        }}
      />
    </Stack.Navigator>
  );
}
