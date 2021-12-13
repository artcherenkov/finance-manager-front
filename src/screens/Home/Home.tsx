import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import DailyAdvice from "../../components/DailyAdvice/DailyAdvice";
import ExpenseHistory from "../../components/ExpenseHistory/ExpenseHistory";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import * as Styled from "./Home.styled";
import FullHistoryModal from "./components/FullHistoryModal/FullHistoryModal";
import { useAppSelector } from "../../store/hooks";
import { selectExpenses } from "../../store/slices/data";

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const expensesCount = useAppSelector(selectExpenses).length;

  const onModalOpen = () => setModalOpen(true);
  const onModalClose = () => setModalOpen(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <DailyAdvice />

        <NewExpenseForm>
          <Styled.Title style={{ marginBottom: 20 }}>
            Add new expense
          </Styled.Title>
        </NewExpenseForm>

        <Styled.HistoryHeader>
          <Styled.Title style={{ marginTop: 20, marginBottom: 16 }}>
            History
          </Styled.Title>
          {expensesCount > 0 && (
            <Styled.ShowAll onPress={onModalOpen}>
              <Styled.ShowAllText>Show all</Styled.ShowAllText>
            </Styled.ShowAll>
          )}
        </Styled.HistoryHeader>

        <ExpenseHistory />

        <FullHistoryModal
          animationType="slide"
          visible={modalOpen}
          onClose={onModalClose}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
