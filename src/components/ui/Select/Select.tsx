import React, { useState } from "react";
import TextField from "../TextField/TextField";
import { Modal } from "react-native";
import * as Styled from "./Select.styled";
import CloseModalButton from "./components/CloseModalButton";
import TransactionType from "./components/TransactionType";

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
        label="Select transaction type"
        inputComponent={<TransactionType text={value} onPress={handleOpen} />}
      />
      <Modal visible={open} animationType="slide" onRequestClose={handleClose}>
        <Styled.ModalContent>
          <CloseModalButton onPress={handleClose} />
          <Styled.ModalTitle>Select transaction type</Styled.ModalTitle>
          <Styled.TypesContainer>
            <TransactionType
              onPress={() => handleChange("House")}
              text="House"
              mb
            />
            <TransactionType
              onPress={() => handleChange("Food")}
              text="Food"
              mb
            />
            <TransactionType
              onPress={() => handleChange("Entertainment")}
              text="Entertainment"
              mb
            />
            <TransactionType
              onPress={() => handleChange("Credit")}
              text="Credit"
              mb
            />
            <TransactionType
              onPress={() => handleChange("Transport")}
              text="Transport"
            />
          </Styled.TypesContainer>
        </Styled.ModalContent>
      </Modal>
    </>
  );
};

export default Select;
