import React from "react";
import { ViewProps } from "react-native";

import * as Styled from "./Transaction.styled";
import Icon from "../../assets/icon-house";

interface ITransaction extends ViewProps {
  scale?: number;
  last?: boolean;
}

const Transaction = ({ scale = 1, last }: ITransaction) => {
  return (
    <Styled.Root style={{ transform: [{ scale }] }} last={last}>
      <Icon />
      <Styled.Text>Apartment payment Apartment payment</Styled.Text>
      <Styled.Amount>–$1,500</Styled.Amount>
    </Styled.Root>
  );
};

export default Transaction;
