import React, { useMemo } from "react";
import { ViewProps } from "react-native";

import * as Styled from "./Expense.styled";
import { TExpense } from "../../../../types/expense";
import { ExpenseTypeEnum } from "./Expense.const";

interface IExpenseProps extends ViewProps {
  scale?: number;
  last?: boolean;
  data: TExpense;
}

const Expense = ({ scale = 1, last, data }: IExpenseProps) => {
  const expenseType = useMemo(
    () => ExpenseTypeEnum[data.type.toUpperCase()],
    [data]
  );

  return (
    <Styled.Root
      style={{ transform: [{ scale }, { translateY: 20 * scale }] }}
      last={last}
    >
      {expenseType.icon}
      <Styled.Text>{data.title}</Styled.Text>
      <Styled.Amount>–${data.amount}</Styled.Amount>
    </Styled.Root>
  );
};

export default Expense;
