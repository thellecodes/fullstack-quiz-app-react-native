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
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OnBoardingRoutes } from "../Navigation";
import { AppStackRoutes } from "../../../App";

export type currAnswerObjectProps = {
  question: string;
  answer: string;
  answerIsCorrect: boolean;
  correctAnswer: string;
};

interface QuesitonProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<OnBoardingRoutes, "Welcome">,
    StackNavigationProp<AppStackRoutes, "Question">
  >;
}

const Question = ({ navigation }: QuesitonProps) => {
  const { x, scrollHandler } = useScrollHandler();
  const scroll = useRef<Animated.ScrollView>(null);

  const [qloading, setqloading] = useState<boolean>(false);
  const [allQuestions, setAllQuestion] = useState<QuizPropsState[]>([]);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<
    currAnswerObjectProps[]
  >([]);
  const [score, setScore] = useState<number>(0);
  const [curNum, setCurNum] = useState<number>(0);
  const [TOTAL_QUESTIONS] = useState<number>(10);
  const [quizOver, setQuizOver] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const shuffledDifficulty = _([
    QuestionsDifficulty.EASY,
    QuestionsDifficulty.MEDIUM,
    QuestionsDifficulty.HARD,
  ]);

  const answerSelected = (answer: string, index: number) => {
    if (!quizOver) {
      // Check if the selected answer is correct answer
      const answerIsCorrect = allQuestions[curNum].correct_answer === answer;

      // Increment score if answer is correct
      if (answerIsCorrect) setScore((currScore) => currScore + 1);

      // Save current answer to userSelected answer;
      const currAnswerObject = {
        question: allQuestions[curNum].question,
        answer,
        answerIsCorrect,
        correctAnswer: allQuestions[curNum].correct_answer,
      };

      setUserSelectedAnswers((curranswers) => [
        ...curranswers,
        currAnswerObject,
      ]);
    }
  };

  const startJob = async () => {
    setqloading(true);
    setQuizOver(false);
    const newQuestions = await grabQuizQuestions(
      TOTAL_QUESTIONS,
      shuffledDifficulty[0]
    );
    setAllQuestion(newQuestions);
    setScore(0);
    setUserSelectedAnswers([]);
    setqloading(false);
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    if (!quizOver && curNum < allQuestions.length - 1) {
      setCurNum((number) => number + 1);
    } else {
      setQuizOver(true);
    }
  };

  useEffect(() => {
    if (!quizOver) {
      if (scroll.current) {
        scroll.current.getNode().scrollTo({
          x: width * curNum,
          animated: true,
        });
      }
    }
  }, [curNum]);

  useEffect(() => {
    if (userSelectedAnswers.length > 0) {
      nextQuestion();
    }
  }, [userSelectedAnswers]);

  useEffect(() => {
    startJob();
  }, []);

  //* Finished Animation*//
  const finishedValue = useValue<number>(0);

  useEffect(() => {
    if (quizOver) {
      finishedValue.setValue(1);
    }
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
                  {...scrollHandler}
                >
                  {allQuestions.map(({ question }, index) => (
                    <Fragment key={index}>
                      <QuestionSlide
                        {...{ question, index }}
                        questionNr={curNum + 1}
                      />
                    </Fragment>
                  ))}
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
                    width: width * allQuestions.length,
                    flexDirection: "row",
                    transform: [{ translateX: multiply(x, -1) }],
                  }}
                >
                  {allQuestions.map(({ answers }, index) => (
                    <Fragment key={index}>
                      <Answers {...{ answers, answerSelected }} />
                    </Fragment>
                  ))}
                </View>
              </Box>

              <View
                style={{
                  width: width * allQuestions.length,
                  backgroundColor: "white",
                  flexDirection: "row",
                  transform: [{ translateX: multiply(x, -1) }],
                }}
              >
                {allQuestions.map(({ answers }, index) => {
                  const last = index === allQuestions.length - 1;
                  return (
                    <Fragment key={index}>
                      <View
                        style={{
                          flex: 1,
                          width,
                          justifyContent: "center",
                          padding: 20,
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="primary"
                          label={last ? "Submit" : "next"}
                          textTransform="uppercase"
                          onPress={nextQuestion}
                        />
                      </View>
                    </Fragment>
                  );
                })}
              </View>
            </Box>
          </Box>
        )}
      </Box>
      <Alert
        {...{ finished }}
        onRestart={() => {
          finishedValue.setValue(0);
          startJob();
          navigation.navigate("Welcome");
        }}
        userAnswers={userSelectedAnswers}
      />
    </QuizContainer>
  );
};

export default Question;
