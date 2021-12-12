import React from "react";

import Expense from "./components/Expense/Expense";
import * as Styled from "./ExpenseHistory.styled";

const ExpenseHistory = () => {
  return (
    <Styled.Root>
      <Expense />
      <Expense scale={0.9} />
      <Expense scale={0.8} />
      <Expense scale={0.7} />
    </Styled.Root>
  );
};

export default ExpenseHistory;
