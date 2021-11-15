import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Root = styled.View`
  border: 2px solid blue;
  padding-top: 33px;
  flex-grow: 1;
`;

const App = () => {
  return (
    <Root>
      <Text>Open up App.tsx to start working on your app!!!!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Root>
  );
};

export default App;
