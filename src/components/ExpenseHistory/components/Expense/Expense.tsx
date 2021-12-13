import React from "react";
import { ViewProps } from "react-native";

import * as Styled from "./Expense.styled";
import Icon from "../../assets/icon-house";
import { TExpense } from "../../../../types/expense";

interface IExpense extends ViewProps {
  scale?: number;
  last?: boolean;
  data: TExpense;
}

const Expense = ({ scale = 1, last, data }: IExpense) => {
  return (
    <Styled.Root
      style={{ transform: [{ scale }, { translateY: 20 * scale }] }}
      last={last}
    >
      <Icon />
      <Styled.Text>{data.title}</Styled.Text>
      <Styled.Amount>–${data.amount}</Styled.Amount>
    </Styled.Root>
  );
};

export default Expense;
