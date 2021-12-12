import React from "react";

import DailyAdvice from "../../components/DailyAdvice/DailyAdvice";
import * as Styled from "./Home.styled";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import NewTransactionForm from "../../components/NewTransactionForm/NewTransactionForm";
import { Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
        <DailyAdvice />

        <NewTransactionForm>
          <Styled.Title style={{ marginBottom: 20 }}>
            Add new transaction
          </Styled.Title>
        </NewTransactionForm>

        <Styled.Title style={{ marginTop: 20, marginBottom: 16 }}>
          History
        </Styled.Title>
        <TransactionHistory />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
