import React, { useState } from "react";
import { PressableProps, GestureResponderEvent } from "react-native";

import * as Styled from "./SubmitButton.styled";

interface ISubmitButton extends PressableProps {}

const SubmitButton = (props: ISubmitButton) => {
  const { children, onPressIn, onPressOut, disabled, ...rest } = props;

  const [pressed, setPressed] = useState(false);

  const handlePressIn = (evt: GestureResponderEvent) => {
    setPressed(true);
    if (onPressIn) {
      onPressIn(evt);
    }
  };

  const handlePressOut = (evt: GestureResponderEvent) => {
    setPressed(false);
    if (onPressOut) {
      onPressOut(evt);
    }
  };

  return (
    <Styled.Button
      pressed={pressed}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Styled.Text>{children}</Styled.Text>
    </Styled.Button>
  );
};

export default SubmitButton;
