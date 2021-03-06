import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 21.333A2.667 2.667 0 0 1 21.333 24H2.667A2.667 2.667 0 0 1 0 21.333V2.667A2.667 2.667 0 0 1 2.667 0h18.666A2.667 2.667 0 0 1 24 2.667v18.666Z"
        fill="#88C9F9"
      />
      <Path
        d="M12.894 23.637a1.282 1.282 0 0 1-1.787 0l-4.422-4.353c-.492-.484-.622-1.355-.29-1.936l5-12.298c.333-.58.877-.58 1.209 0l5 12.298c.332.58.202 1.452-.29 1.935l-4.42 4.354Z"
        fill="#DD2E44"
      />
      <Path
        d="M12 9.779c.633 0 1.336-.635 1.933-1.461L12.604 5.05c-.333-.58-.877-.58-1.209 0l-1.328 3.268c.598.826 1.3 1.46 1.933 1.46Z"
        fill="#A0041E"
      />
      <Path
        d="M15.333 3.852c0 1.31-1.86 4.741-3.333 4.741S8.667 5.161 8.667 3.852C8.667 2.663 10.527 2 12 2s3.333.663 3.333 1.852Z"
        fill="#DD2E44"
      />
      <Path
        d="M0 2.667v1.502c1.383 1.847 4.52 5.168 5.333 5.168 1.473 0 7.334-7.198 7.334-8.67C12.667 0 12 0 11.333 0H2.667A2.667 2.667 0 0 0 0 2.667Z"
        fill="#4CA0D3"
      />
      <Path
        d="M11.333.667c0 1.472 5.861 8.67 7.334 8.67.814 0 3.95-3.321 5.333-5.168V2.667A2.667 2.667 0 0 0 21.333 0h-8.666C12 0 11.333 0 11.333.667Z"
        fill="#4CA0D3"
      />
      <Path
        d="M2.667 0c-.178 0-.351.02-.519.053C2.937 1.157 7.041 2 12 2c4.959 0 9.063-.843 9.852-1.947A2.658 2.658 0 0 0 21.333 0H2.667Z"
        fill="#269"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
