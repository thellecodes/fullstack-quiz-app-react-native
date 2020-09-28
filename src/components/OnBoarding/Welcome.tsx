import React from "react";
import { Dimensions, SafeAreaView, Image } from "react-native";
import Constants from "expo-constants";

/* Navigation Props*/
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OnBoardingRoutes } from "../Navigation";
import { AppStackRoutes } from "../../../App";

const { height, width } = Dimensions.get("window");
import { moderateScale, verticalScale } from "react-native-size-matters";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export const welcomeAssets = require("../../../assets/images/boygirl.png");

/* Utils */
import theme, { Box, Text } from "../theme";
import { Button } from "../../Utils";
import QuizContainer from "../Question/QuizContainer";
interface WelcomeProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<OnBoardingRoutes, "Welcome">,
    StackNavigationProp<AppStackRoutes, "Question">
  >;
}

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <QuizContainer>
      <Box flex={1} backgroundColor="white" justifyContent="flex-start">
        <Box height={height * 0.5} justifyContent="center" alignItems="center">
          <Box
            height={verticalScale(250)}
            width={moderateScale(250)}
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
            padding="m"
          >
            <Image
              source={welcomeAssets}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
          </Box>
        </Box>

        <Animated.View
          style={{
            backgroundColor: theme.colors["primary"],
            height: 500 + height,
            width: width * 2,
            borderRadius: 1000,
            position: "absolute",
            alignSelf: "center",
            top: 0.52 * height,
          }}
        />

        <Animated.View
          style={{
            backgroundColor: theme.colors["primary"],
            height: height * 0.35,
            width: width,
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text variant="title" marginBottom="m" textAlign="center">
            Quiz App
          </Text>

          <Text
            variant="body"
            color="white"
            textAlign="center"
            marginBottom="m"
          >
            Improve your app building skills and upgrade your personal growth
          </Text>

          <Button
            variant="primary"
            label="Start Quiz"
            onPress={() => navigation.navigate("Question")}
            textTransform="uppercase"
          />
        </Animated.View>
      </Box>
      <StatusBar backgroundColor={theme.colors["primary"]} style="light" />
    </QuizContainer>
  );
};

export default Welcome;
