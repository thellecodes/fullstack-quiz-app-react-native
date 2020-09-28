import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import theme from "../theme";

interface QuizContainerProps {
  children: ReactElement;
}

export default function QuizContainer({ children }: QuizContainerProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
      <StatusBar backgroundColor={theme.colors["primary"]} style="light" />
    </SafeAreaView>
  );
}
