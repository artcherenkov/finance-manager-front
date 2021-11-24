import styled, { css } from "styled-components/native";
import { Color } from "../../../../const";

export const Button = styled.Pressable<{ pressed?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border-radius: 10px;
  background-color: ${Color.BLUE};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
    `};

  ${(props) =>
    props.pressed &&
    css`
      transform: scale(0.95);
    `};
`;

export const Text = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: white;
`;
