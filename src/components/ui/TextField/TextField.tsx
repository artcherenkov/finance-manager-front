import React from "react";
import { TextInputProps } from "react-native";
import { Color } from "../../../const";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import * as Styled from "./TextField.styled";

interface ITextField extends TextInputProps {
  label?: string;
  error?: string;
  lastChild?: boolean;
}

const TextField = (props: ITextField) => {
  const { label, error, lastChild, ...inputProps } = props;

  return (
    <Styled.Container lastChild={lastChild}>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.TextInput {...inputProps} placeholderTextColor={Color.DARK400} />
      <ErrorMessage>{error}</ErrorMessage>
    </Styled.Container>
  );
};

export default TextField;
