import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M8.667 21.333H22s2 0 2-2.666c0-1.334 0-4-.667-4.667C22.667 13.333 18 9.333 16 9.333h-4C10 9.333 5.333 14 5.333 14l-2.666.667s-2 .666-2 2v2S0 18.892 0 19.97c0 1.362 1.333 1.362 1.333 1.362h7.334Z"
      fill="#DD2E44"
    />
    <Path
      d="M13.333 10.667H12c-1.333 0-5.333 4-5.333 4s3.331-.176 6.666-.346v-3.654Zm6.667 2c-.667-.667-3.333-2-4.667-2h-.666v3.586C17.34 14.117 19.72 14 20 14c.667 0 .667-.667 0-1.333Z"
      fill="#BBDDF5"
    />
    <Path
      d="M6.667 23.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"
      fill="#292F33"
    />
    <Path
      d="M6.667 22a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Z"
      fill="#CCD6DD"
    />
    <Path
      d="M18 23.333A2.667 2.667 0 1 0 18 18a2.667 2.667 0 0 0 0 5.333Z"
      fill="#292F33"
    />
    <Path
      d="M18 22a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 18 22Z"
      fill="#CCD6DD"
    />
  </Svg>
);

export default SvgComponent;
