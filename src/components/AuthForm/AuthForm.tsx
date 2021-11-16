import React from "react";
import { View, StyleProp, TextStyle, ScrollView } from "react-native";

import * as Styled from "./AuthForm.styled";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";

const ERROR_STYLES: StyleProp<TextStyle> = {
  textAlign: "center",
  fontSize: 12,
};

interface IAuthForm {
  children: React.ReactNode;
  error?: string;
  title?: string;
}

const AuthForm = ({ children, title, error }: IAuthForm) => {
  return (
    <ScrollView>
      <View>
        <Styled.Title>{title}</Styled.Title>
        <ErrorMessage style={ERROR_STYLES}>{error}</ErrorMessage>
      </View>
      {children}
    </ScrollView>
  );
};

export default AuthForm;
