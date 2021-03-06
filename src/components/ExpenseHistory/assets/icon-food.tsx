import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M1.659 22.343c1.607 1.606 3.402 2.418 5.125.694 1.224-1.223.912-3.518-.695-5.126-1.607-1.606-3.901-1.918-5.125-.694-1.724 1.723-.912 3.518.695 5.126Zm4.369-4.37c1.205 1.206 1.438 2.927.52 3.845-1.291 1.292-2.638.683-3.844-.522s-1.814-2.55-.521-3.844c.917-.917 2.639-.684 3.845.521ZM22.342 1.658C20.735.051 18.941-.76 17.217.963c-1.223 1.224-.912 3.518.695 5.126 1.608 1.607 3.9 1.918 5.126.694 1.723-1.723.912-3.518-.696-5.125Zm-4.368 4.369c-1.206-1.206-1.44-2.926-.522-3.844 1.292-1.292 2.639-.684 3.845.521 1.206 1.205 1.814 2.551.521 3.844-.917.917-2.639.684-3.845-.521Z"
        fill="#292F33"
      />
      <Path
        d="M12 23.333c6.26 0 11.333-5.074 11.333-11.333C23.333 5.74 18.26.667 12 .667 5.74.667.667 5.74.667 12 .667 18.26 5.74 23.333 12 23.333Z"
        fill="#292F33"
      />
      <Path
        d="M21.067 12a9.067 9.067 0 1 1-18.134 0 9.067 9.067 0 0 1 18.134 0Z"
        fill="#FFAC33"
      />
      <Path
        d="m12.963 7.11-1.692-1.693a.747.747 0 1 0-1.311-.346.75.75 0 0 0-.66 1.268.746.746 0 0 0 1.007.042l1.692 1.692.964-.963Z"
        fill="#FFE8B6"
      />
      <Path
        d="M18.446 13.557c.482-.482 1.7-2.55.014-4.237-1.175-1.175-2.123-1.108-3.885-1.545-.722-.241-1.665-1.11-1.906-1.35-.241.24-.156 1.122-.156 1.122s-1.05.085-1.292.326c.241.24 1.361 1.3 1.557 1.796.527 1.672.467 2.523 1.643 3.698 1.927 1.927 3.544.672 4.025.19Z"
        fill="#C1694F"
      />
      <Path
        d="M6.222 11c0 1.289 2.066 2.333.778 2.333a2.333 2.333 0 1 1 0-4.666c1.289 0-.778 1.044-.778 2.333Zm5.79 6.327c1.066.514 2.757-.778 2.243.288a2.145 2.145 0 1 1-3.863-1.865c.515-1.067.554 1.062 1.62 1.577Z"
        fill="#77B255"
      />
      <Path
        d="M10 12.667A1.333 1.333 0 1 0 10 10a1.333 1.333 0 0 0 0 2.667ZM16 16.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM7.333 16a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
        fill="#F4900C"
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
