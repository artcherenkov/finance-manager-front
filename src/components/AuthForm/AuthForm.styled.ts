import styled from "styled-components/native";
import { Color } from "../../const";

export const Title = styled.Text`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: ${Color.DARK900};
`;

export const SubmitContainer = styled.View`
  margin-top: 32px;
  width: 100%;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const ChangeModeText = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${Color.DARK900};
`;
