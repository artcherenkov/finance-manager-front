import styled, { css } from "styled-components/native";
import { TextInput as DefaultTextInput } from "react-native";
import { Color } from "../../../const";

export const TextInput = styled(DefaultTextInput)<{ isFocused?: boolean }>`
  border: 1px solid ${Color.DARK400};
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 16px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${Color.BLUE};
    `};
`;
export const Container = styled.View<{ lastChild?: boolean }>`
  margin-bottom: 8px;

  ${(props) =>
    props.lastChild &&
    css`
      margin-bottom: 0;
    `};
`;
export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 19px;
`;
