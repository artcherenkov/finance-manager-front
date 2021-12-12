import React from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

import { Color } from "../../../../const";
import Icon from "../assets/icon-house";

export const Root = styled.TouchableOpacity<{ mb?: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${Color.DARK400};
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: 12px;
    `};
`;

export const Text = styled.Text`
  margin-left: 10px;
`;

interface IExpenseTypeProps extends TouchableOpacityProps {
  /** заголовок типа траты */
  text: string;

  /** нужен ли марджин снизу (mb - margin bottom) */
  mb?: boolean;
}

const ExpenseType = (props: IExpenseTypeProps) => {
  const { mb, text, ...rest } = props;

  return (
    <Root mb={mb} {...rest}>
      <Icon />
      <Text>{text}</Text>
    </Root>
  );
};

export default ExpenseType;
