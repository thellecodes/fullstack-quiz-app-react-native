import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Theme, Text, Box } from "../components/theme";
const { width } = Dimensions.get("window");

interface AnswerButtonProps {
  variant?: "default" | "primary";
  answer?: string;
  clicked?: number | boolean;
  correct?: boolean;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
});

const AnswersBtn = ({
  variant,
  answer,
  onPress,
  clicked,
}: AnswerButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.button : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.green;

  return (
    <RectButton
      {...{ onPress }}
      style={{
        ...styles.container,
        width: width * 0.9,
        backgroundColor,
      }}
    >
      <Text style={{ color }} variant="button" textAlign="center">
        {answer}
      </Text>
    </RectButton>
  );
};

AnswersBtn.defaultProps = { variant: "default" };

export default AnswersBtn;
