import React, { useEffect } from "react";

import Expense from "./components/Expense/Expense";
import * as Styled from "./ExpenseHistory.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectExpenses,
  selectExpensesLoading,
  getExpenses,
} from "../../store/slices/data";
import { Text, ActivityIndicator } from "react-native";

const MAX_ITEMS_COUNT = 4;

const countScale = (idx: number) => 1 - idx / 10;

const ExpenseHistory = () => {
  const dispatch = useAppDispatch();

  const expenses = useAppSelector(selectExpenses);
  const expensesLoading = useAppSelector(selectExpensesLoading);

  useEffect(() => {
    dispatch(getExpenses());
  }, []);

  if (expensesLoading) {
    return (
      <Styled.Root>
        <ActivityIndicator />
      </Styled.Root>
    );
  }

  if (!expenses.length) {
    return (
      <Styled.Root>
        <Text>There is nothing here yet</Text>
      </Styled.Root>
    );
  }

  return (
    <Styled.Root>
      {expenses
        .slice(-MAX_ITEMS_COUNT)
        .reverse()
        .map((ex, idx) => (
          <Expense key={ex._id} scale={countScale(idx)} data={ex} />
        ))}
    </Styled.Root>
  );
};

export default ExpenseHistory;
