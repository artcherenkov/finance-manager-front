import React, { useState, useMemo } from "react";
import * as Styled from "./NewExpenseForm.styled";
import TextField from "../ui/TextField/TextField";
import SubmitButton from "../ui/SubmitButton/SubmitButton";
import Select from "../ui/Select/Select";
import { useAppDispatch } from "../../store/hooks";
import { postExpense } from "../../store/slices/data";

interface INewExpenseForm {
  /** например, заголовок формы */
  children: React.ReactNode;
}

const NewExpenseForm = ({ children }: INewExpenseForm) => {
  const dispatch = useAppDispatch();

  const [type, setType] = useState("House");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const isFormValid = useMemo(() => +amount > 0, [amount]);

  const onFormSubmit = () => {
    dispatch(postExpense({ type, title: title || type, amount: +amount }));
  };

  return (
    <Styled.Root>
      {children}
      <Select value={type} onChange={setType} />
      <TextField
        label="Title"
        value={title}
        onChangeText={setTitle}
        placeholder="Enter expense title"
      />
      <TextField
        label="Amount of money"
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount of money"
        keyboardType="number-pad"
      />
      <SubmitButton disabled={!isFormValid} onPress={onFormSubmit}>
        Add
      </SubmitButton>
    </Styled.Root>
  );
};

export default NewExpenseForm;
