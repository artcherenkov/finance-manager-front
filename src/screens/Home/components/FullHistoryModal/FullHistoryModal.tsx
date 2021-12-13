import React, { useMemo } from "react";
import { ModalProps, Modal } from "react-native";
import dayjs from "dayjs";

import Expense from "../../../../components/ExpenseHistory/components/Expense/Expense";
import { TServerExpense } from "../../../../types/expense";
import { useAppSelector } from "../../../../store/hooks";
import { selectExpenses } from "../../../../store/slices/data";
import * as Styled from "./FullHistoryModal.styled";

interface IFullHistoryModalProps extends ModalProps {
  onClose(): void;
}

type TSortedExpenses = {
  [date: string]: TServerExpense[];
};

const dateComparator = (a: TServerExpense, b: TServerExpense) => {
  const dateA = dayjs(a.createdAt);
  const dateB = dayjs(b.createdAt);

  if (dateA.isBefore(dateB)) return 1;
  if (dateA.isAfter(dateB)) return -1;
  return 0;
};
const formatDates = (expense: TServerExpense): TServerExpense => {
  const date = dayjs(expense.createdAt);
  let formattedDate: string;

  if (date.isSame(dayjs(), "d")) {
    formattedDate = "Today";
  } else if (date.isSame(dayjs().subtract(1, "d"), "d")) {
    formattedDate = "Yesterday";
  } else {
    formattedDate = date.format("MMMM, DD");
  }

  return { ...expense, createdAt: formattedDate };
};

const prepareExpenses = (expenses: TServerExpense[]) => {
  return expenses
    .slice()
    .sort(dateComparator)
    .map(formatDates)
    .reduce((acc: TSortedExpenses, expense) => {
      const date = expense.createdAt;
      if (acc && Object.keys(acc).includes(date)) {
        return { ...acc, [date]: [...acc[date], expense] };
      }

      return { ...acc, [date]: [expense] };
    }, {});
};

const FullHistoryModal = (props: IFullHistoryModalProps) => {
  const { onClose, ...rest } = props;

  const expenses = useAppSelector(selectExpenses);
  const sortedExpenses = useMemo(() => prepareExpenses(expenses), [expenses]);

  return (
    <Modal {...rest}>
      <Styled.ContentContainer>
        <Styled.Close onPress={onClose}>
          <Styled.CloseText>Close</Styled.CloseText>
        </Styled.Close>
        <Styled.Title>History</Styled.Title>

        {sortedExpenses &&
          Object.keys(sortedExpenses).map((day) => (
            <Styled.ExpensesBlock key={day}>
              <Styled.DayTitle>{day}</Styled.DayTitle>
              <Styled.ExpensesList>
                {sortedExpenses[day].map((ex) => (
                  <Expense key={ex._id} data={ex} />
                ))}
              </Styled.ExpensesList>
            </Styled.ExpensesBlock>
          ))}
      </Styled.ContentContainer>
    </Modal>
  );
};

export default FullHistoryModal;
