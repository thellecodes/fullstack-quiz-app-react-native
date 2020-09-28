import React from "react";
import { View, Dimensions } from "react-native";
import { Box, Text } from "../theme";
import { questions } from "./data";
const { width, height } = Dimensions.get("window");

interface QuestionSlideProps {
}

export default function QuestionSlide({
}: QuestionSlideProps) {
  return (
    <Box {...{ width }} alignItems="center" padding="m">
      <Text variant="title" fontSize={24} marginTop="m">
        Question Number {}
      </Text>

      <Text variant="body" color="white" marginTop="xl" textAlign="center">
        {question}
      </Text>
    </Box>
  );
}
