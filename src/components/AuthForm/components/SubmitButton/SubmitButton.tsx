import React, { useState } from "react";
import {
  PressableProps,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";

import * as Styled from "./SubmitButton.styled";

interface ISubmitButton extends PressableProps {
  loading?: boolean;
}

const SubmitButton = (props: ISubmitButton) => {
  const { children, onPressIn, onPressOut, disabled, loading, ...rest } = props;

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
      disabled={disabled || loading}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="white" style={{ paddingTop: 1 }} />
      ) : (
        <Styled.Text>{children}</Styled.Text>
      )}
    </Styled.Button>
  );
};

export default SubmitButton;
