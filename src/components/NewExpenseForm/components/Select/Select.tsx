import React, { useState } from "react";
import TextField from "../../../ui/TextField/TextField";
import { Modal } from "react-native";
import * as Styled from "./Select.styled";
import CloseModalButton from "./components/CloseModalButton";
import ExpenseType from "./components/ExpenseType";

interface ISelectProps {
  value: string;
  onChange: (value: string) => void;
}

const Select = (props: ISelectProps) => {
  const { onChange, value } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (newValue: string) => {
    onChange(newValue);
    handleClose();
  };

  return (
    <>
      <TextField
        label="Select expense type"
        inputComponent={<ExpenseType type={value} onPress={handleOpen} />}
      />
      <Modal visible={open} animationType="slide" onRequestClose={handleClose}>
        <Styled.ModalContent>
          <CloseModalButton onPress={handleClose} />
          <Styled.ModalTitle>Select expense type</Styled.ModalTitle>
          <Styled.TypesContainer>
            <ExpenseType
              onPress={() => handleChange("House")}
              type="House"
              mb
            />
            <ExpenseType onPress={() => handleChange("Food")} type="Food" mb />
            <ExpenseType
              onPress={() => handleChange("Entertainment")}
              type="Entertainment"
              mb
            />
            <ExpenseType
              onPress={() => handleChange("Credit")}
              type="Credit"
              mb
            />
            <ExpenseType
              onPress={() => handleChange("Transport")}
              type="Transport"
            />
          </Styled.TypesContainer>
        </Styled.ModalContent>
      </Modal>
    </>
  );
};

export default Select;
