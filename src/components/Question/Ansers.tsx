import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnswerBtn } from "../../Utils";

interface AnswersProps {
  answers: string[];
  onPress?: () => void;
  answerSelected: (answer: string, index: number) => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
});

export default function Answers({ answers, answerSelected }: AnswersProps) {
  return (
    <View style={{ ...styles.container }}>
     
    </View>
  );
}
