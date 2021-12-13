import styled from "styled-components/native";
import { Color } from "../../../../const";

export const ContentContainer = styled.ScrollView`
  flex-grow: 1;
  margin-top: 35px;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
  margin-top: 20px;
`;

export const ExpensesBlock = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const ExpensesList = styled.View`
  align-items: center;
`;

export const DayTitle = styled.Text`
  text-align: center;
`;

export const Close = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 25px;
  margin-top: 16px;
`;
export const CloseText = styled.Text`
  color: ${Color.BLUE};
  font-size: 16px;
`;
