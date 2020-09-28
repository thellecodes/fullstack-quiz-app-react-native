import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  multiply,
  SpringUtils,
  Value,
} from "react-native-reanimated";
import { verticalScale } from "react-native-size-matters";
import theme, { Box, Text } from "../theme";
import QuestionSlide from "./QuestionSlide";
import QuizContainer from "./QuizContainer";
import {
  useScrollHandler,
  useValue,
  withSpringTransition,
} from "react-native-redash";
const { View, ScrollView } = Animated;

/* Utils */
const { height, width } = Dimensions.get("window");
import { questions } from "./data";
import Answers from "./Ansers";
import { Button } from "../../Utils";
import {
  grabQuizQuestions,
  QuestionsDifficulty,
  QuizPropsState,
  _,
} from "../Helper";
import Alert from "./Alert";

export type currAnswerObjectProps = {

};

interface QuesitonProps {
 
}

const Question = ({ navigation }: QuesitonProps) => {
  const scroll = useRef<Animated.ScrollView>(null);

  const shuffledDifficulty = _([ ]);

  const answerSelected = (answer: string, index: number) => {
  
  };

  const startJob = async () => {
   
  };

  const nextQuestion = () => {
   
  };

  useEffect(() => {
  }, [curNum]);

  useEffect(() => {
  
  }, [userSelectedAnswers]);

  useEffect(() => {
  }, []);

  //* Finished Animation*//
  const finishedValue = useValue<number>(0);

  useEffect(() => {
   
  }, [quizOver]);

  const finished = withSpringTransition(finishedValue, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Value(10),
  });

  return (
    <QuizContainer>
      <Box flex={1}>
        {qloading ? (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.colors["primary"],
            }}
          >
            <Text color="white" variant="body">
              Quiz Loading...
            </Text>
          </View>
        ) : (
          <Box flex={1}>
            <Box justifyContent="flex-start" flex={1} flexDirection="column">
              <Box
                height={verticalScale(height * 0.3)}
                backgroundColor="primary"
              >
                <ScrollView
                  ref={scroll}
                  horizontal
                  snapToInterval={width}
                  decelerationRate="fast"
                  bounces={false}
                >
                 
                </ScrollView>
              </Box>

              <Box
                style={{ flex: 1 }}
                backgroundColor="white"
                height={0.4 * height}
                paddingTop="m"
              >
                <View
                  style={{
                    backgroundColor: theme.colors["white"],
                    flexDirection: "row",
                  }}
                >
                 
                </View>
              </Box>

              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "row",
                }}
              >
               
              </View>
            </Box>
          </Box>
        )}
      </Box>
      
    </QuizContainer>
  );
};

export default Question;
