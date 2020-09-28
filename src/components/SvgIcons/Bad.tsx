import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, Circle } from "react-native-svg";
import theme from "../theme";

export interface IconProps {
  onPress?: () => void;
  active?: boolean;
  activeTransition?: any;
}

export default ({ active }: IconProps) => {
  return (
    <Svg
      width={moderateScale(74)}
      height={moderateScale(74)}
      viewBox="0 0 24 24"
    >
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={theme.colors["danger"]}
        strokeWidth={1}
      />
      <Path
        d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01"
        fill={theme.colors["danger"]}
        stroke={theme.colors["danger"]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
