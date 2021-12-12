import React from "react";
import { ViewProps } from "react-native";

import * as Styled from "./Expense.styled";
import Icon from "../../assets/icon-house";

interface IExpense extends ViewProps {
  scale?: number;
  last?: boolean;
}

const Expense = ({ scale = 1, last }: IExpense) => {
  return (
    <Styled.Root style={{ transform: [{ scale }] }} last={last}>
      <Icon />
      <Styled.Text>Apartment payment Apartment payment</Styled.Text>
      <Styled.Amount>–$1,500</Styled.Amount>
    </Styled.Root>
  );
};

export default Expense;
