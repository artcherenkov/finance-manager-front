import React, { useMemo } from "react";
import styled, { css } from "styled-components/native";
import { Color } from "../../../const";
import { StyleProp, TextStyle } from "react-native";

/** Нужно, чтобы отслеживать, пришла ошибка в пропсах или нет.
 * Если не пришла, нужно проследить, чтобы поле все равно было
 * чем-то заполнено. Иначе едет верстка.
 * */
const EMPTY_ERROR_TEXT = "-1";

const Error = styled.Text<{ children?: string }>`
  color: ${Color.RED};
  opacity: 0;
  margin-top: 3px;
  font-size: 10px;
  line-height: 12px;

  ${(props) =>
    props.children !== EMPTY_ERROR_TEXT &&
    css`
      opacity: 1;
    `}
`;

interface IErrorMessage {
  children?: string;
  style?: StyleProp<TextStyle>;
}

const ErrorMessage = (props: IErrorMessage) => {
  const { children, style } = props;

  const errorText = useMemo(() => children || EMPTY_ERROR_TEXT, [children]);

  return <Error style={style}>{errorText}</Error>;
};

export default ErrorMessage;
