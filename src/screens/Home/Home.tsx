import React, { useEffect } from "react";

import DailyAdvice from "../../components/DailyAdvice/DailyAdvice";
import * as Styled from "./Home.styled";
import ExpenseHistory from "../../components/ExpenseHistory/ExpenseHistory";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import { Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { getExpenses } from "../../utils/api";

const HomeScreen = () => {
  useEffect(() => {
    getExpenses()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
        <DailyAdvice />

        <NewExpenseForm>
          <Styled.Title style={{ marginBottom: 20 }}>
            Add new expense
          </Styled.Title>
        </NewExpenseForm>

        <Styled.Title style={{ marginTop: 20, marginBottom: 16 }}>
          History
        </Styled.Title>
        <ExpenseHistory />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
