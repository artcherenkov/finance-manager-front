import React from "react";
import { Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";

import DailyAdvice from "../../components/DailyAdvice/DailyAdvice";
import * as Styled from "./Home.styled";
import ExpenseHistory from "../../components/ExpenseHistory/ExpenseHistory";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";

const HomeScreen = () => {
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
