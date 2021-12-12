import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 16px;
  margin-top: 12px;
`;

const Text = styled.Text`
  color: #357ded;
  font-size: 18px;
`;

const CloseModalButton = (props: TouchableOpacityProps) => {
  return (
    <Button {...props}>
      <Text>Close</Text>
    </Button>
  );
};

export default CloseModalButton;
