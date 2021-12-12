import styled from "styled-components/native";

export const Root = styled.View<{ last?: boolean }>`
  padding: 10px;
  max-width: 305px;
  width: 100%;
  border-radius: 10px;
  background: rgba(252, 191, 73, 0.3);
  flex-direction: row;
  align-items: center;

  ${(props) => !props.last && `margin-bottom: 5px; `};
`;

export const Text = styled.Text`
  margin: 0 10px;
  width: 100%;
  max-width: 170px;
`;

export const Amount = styled.Text`
  width: 70px;
  align-self: flex-end;
  text-align: right;
`;
