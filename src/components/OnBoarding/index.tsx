import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoardingRoutes } from "../Navigation";

import Welcome from "./Welcome";

export const assets = [];

const OnBoardingStack = createStackNavigator<OnBoardingRoutes>();
export const OnBoardingNavigator = () => (
  <OnBoardingStack.Navigator headerMode="none">
    <OnBoardingStack.Screen name="Welcome" component={Welcome} />
  </OnBoardingStack.Navigator>
);
