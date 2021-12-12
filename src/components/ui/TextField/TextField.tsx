import React, { useState } from "react";
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Color } from "../../../const";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import * as Styled from "./TextField.styled";

export interface ITextFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  lastChild?: boolean;
  inputComponent?: React.ReactNode;
}

const TextField = (props: ITextFieldProps) => {
  const {
    label,
    error,
    lastChild,
    onFocus,
    onBlur,
    inputComponent,
    ...inputProps
  } = props;

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
      {inputComponent || (
        <Styled.TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          isFocused={isFocused}
          {...inputProps}
          placeholderTextColor={Color.DARK400}
        />
      )}

      <ErrorMessage>{error}</ErrorMessage>
    </Styled.Container>
  );
};

export default TextField;
