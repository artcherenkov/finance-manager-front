import React from "react";
import { Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as Styled from "./Register.styled";
import { RootStackParamList } from "../../types/navigator";

type TRegisterScreen = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: TRegisterScreen) => {
  const onChangeModePress = () => navigation.navigate("Login");

  return (
    <Styled.Root>
      <Text>Register page</Text>
      <Button onPress={onChangeModePress} title="to login page" />
    </Styled.Root>
  );
};

export default RegisterScreen;
