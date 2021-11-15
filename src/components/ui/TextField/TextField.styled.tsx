import styled, { css } from "styled-components/native";
import { TextInput as DefaultTextInput } from "react-native";
import { Color } from "../../../const";

export const TextInput = styled(DefaultTextInput)`
  border: 1px solid ${Color.DARK900};
  padding: 9px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 16px;
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
