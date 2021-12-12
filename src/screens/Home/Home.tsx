import React from "react";

import DailyAdvice from "../../components/DailyAdvice/DailyAdvice";
import * as Styled from "./Home.styled";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";

const HomeScreen = () => {
  return (
    <Styled.Root>
      <DailyAdvice />
      <Styled.Title style={{ marginTop: 20, marginBottom: 16 }}>
        History
      </Styled.Title>
      <TransactionHistory />
    </Styled.Root>
  );
};

export default HomeScreen;
