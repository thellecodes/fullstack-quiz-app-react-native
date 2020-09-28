import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";

export interface IconProps {
  onPress?: () => void;
  active?: boolean;
  activeTransition?: any;
}

export default ({ active }: IconProps) => {
  return (
    <Svg
      width={moderateScale(60)}
      height={moderateScale(60)}
      viewBox="0 0 208.371 153.023"
    >
      <G data-name="Group 525">
        <Path
          data-name="Path 941"
          strokeWidth={2}
          d="M205.318 3.052a10.418 10.418 0 00-14.734 0L65.764 127.874 17.785 79.895A10.419 10.419 0 103.051 94.629L58.4 149.974a10.421 10.421 0 0014.734 0L205.318 17.786a10.418 10.418 0 000-14.734z"
          fill="#fff"
          stroke="#fff"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
