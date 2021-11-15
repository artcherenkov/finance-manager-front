import React from "react";
import styled from "styled-components/native";
import { Color } from "../../const";

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${Color.DARK900};
`;

const HeaderText = () => {
  return <Title>Welcome to Finance Manager!</Title>;
};

export default HeaderText;
