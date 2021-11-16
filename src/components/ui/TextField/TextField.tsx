import React, { useState } from "react";
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Color } from "../../../const";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import * as Styled from "./TextField.styled";

interface ITextField extends TextInputProps {
  label?: string;
  error?: string;
  lastChild?: boolean;
}

const TextField = (props: ITextField) => {
  const { label, error, lastChild, onFocus, onBlur, ...inputProps } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(evt);
    }
  };
  const handleBlur = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(evt);
    }
  };

  return (
    <Styled.Container lastChild={lastChild}>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        isFocused={isFocused}
        {...inputProps}
        placeholderTextColor={Color.DARK400}
      />

      <ErrorMessage>{error}</ErrorMessage>
    </Styled.Container>
  );
};

export default TextField;
