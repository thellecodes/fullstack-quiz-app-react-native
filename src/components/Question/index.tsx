import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QuestionRoutes } from "../Navigation";

import Question from "./Question";

export const assets = [];

const QuestionStack = createStackNavigator<QuestionRoutes>();
export const QuestionNavigator = () => (
  <QuestionStack.Navigator headerMode="none" initialRouteName="MainQuestion">
    <QuestionStack.Screen name="MainQuestion" component={Question} />
  </QuestionStack.Navigator>
);
