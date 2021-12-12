import React, { useState, useMemo } from "react";
import * as Styled from "./NewExpenseForm.styled";
import TextField from "../ui/TextField/TextField";
import SubmitButton from "../ui/SubmitButton/SubmitButton";
import Select from "../ui/Select/Select";
import { Alert } from "react-native";

interface INewExpenseForm {
  /** например, заголовок формы */
  children: React.ReactNode;
}

const NewExpenseForm = ({ children }: INewExpenseForm) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("House");

  const isFormValid = useMemo(
    () => title.length > 0 && +amount > 0,
    [title, amount]
  );

  return (
    <Styled.Root>
      {children}
      <Select value={type} onChange={(value) => setType(value)} />
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
      <SubmitButton
        disabled={!isFormValid}
        onPress={() =>
          Alert.alert(`type: ${type}\ntitle: ${title}\namount: ${amount}`)
        }
      >
        Add
      </SubmitButton>
    </Styled.Root>
  );
};

export default NewExpenseForm;
