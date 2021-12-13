import styled from "styled-components/native";
import { Color } from "../../const";

export const Root = styled.KeyboardAvoidingView``;

export const HistoryHeader = styled.View`
  position: relative;
`;

export const ShowAll = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 16px;
`;

export const ShowAllText = styled.Text`
  font-size: 14px;
  color: ${Color.BLUE};
`;

export const Title = styled.Text`
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #003049;
`;
