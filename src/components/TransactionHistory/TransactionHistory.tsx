import React from "react";

import Transaction from "./components/Transaction/Transaction";
import * as Styled from "./TransactionHistory.styled";

const TransactionHistory = () => {
  return (
    <Styled.Root>
      <Transaction />
      <Transaction scale={0.9} />
      <Transaction scale={0.8} />
      <Transaction scale={0.7} />
    </Styled.Root>
  );
};

export default TransactionHistory;
