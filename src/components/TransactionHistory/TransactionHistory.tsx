import React from "react";

import Transaction from "./components/Transaction/Transaction";
import * as Styled from "./TransactionHistory.styled";

const TransactionHistory = () => {
  return (
    <Styled.Root>
      <Transaction scale={0.7} />
      <Transaction scale={0.8} />
      <Transaction scale={0.9} />
      <Transaction />
    </Styled.Root>
  );
};

export default TransactionHistory;
