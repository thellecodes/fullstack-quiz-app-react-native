import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type OnBoardingRoutes = {
  Welcome: undefined;
};

export type QuestionRoutes = {
  MainQuestion: undefined;
  Quiz: undefined;
};
