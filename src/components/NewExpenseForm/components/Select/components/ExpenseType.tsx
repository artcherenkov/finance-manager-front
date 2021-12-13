import React, { useMemo } from "react";
import { TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

import { Color } from "../../../../../const";
import { ExpenseTypeEnum } from "../../../../ExpenseHistory/components/Expense/Expense.const";

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
  type: string;

  /** нужен ли марджин снизу (mb - margin bottom) */
  mb?: boolean;
}

const ExpenseType = (props: IExpenseTypeProps) => {
  const { mb, type, ...rest } = props;

  const expenseType = useMemo(
    () => ExpenseTypeEnum[type.toUpperCase()],
    [type]
  );

  return (
    <Root mb={mb} {...rest}>
      {expenseType.icon}
      <Text>{expenseType.text}</Text>
    </Root>
  );
};

export default ExpenseType;
