import React, { useState } from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigator";

import AuthForm from "../../components/AuthForm/AuthForm";
import TextField from "../../components/ui/TextField/TextField";

import * as Styled from "./Login.styled";

type TLoginScreen = NativeStackScreenProps<RootStackParamList, "Register">;

const LoginScreen = ({ navigation }: TLoginScreen) => {
  const [value, setValue] = useState("");
  const [formError] = useState("");

  const onChangeModePress = () => navigation.navigate("Register");

  return (
    <Styled.Root>
      <AuthForm title="Login" error={formError}>
        <TextField
          label="Email"
          error=""
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={setValue}
          value={value}
        />
        <TextField
          label="Password"
          error=""
          lastChild
          secureTextEntry
          placeholder="Enter your password"
          onChangeText={setValue}
          value={value}
        />
      </AuthForm>
      <Button onPress={onChangeModePress} title="to register page" />
    </Styled.Root>
  );
};

export default LoginScreen;
