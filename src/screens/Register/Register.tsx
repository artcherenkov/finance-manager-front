import React from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthForm, {
  SubmitContainer,
  ChangeModeText,
} from "../../components/AuthForm";
import TextField from "../../components/ui/TextField/TextField";
import SubmitButton from "../../components/AuthForm/components/SubmitButton/SubmitButton";
import { RootStackParamList } from "../../types/navigator";
import * as Styled from "./Register.styled";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 25;

type TRegisterScreen = NativeStackScreenProps<RootStackParamList, "Login">;

const schema = yup
  .object({
    email: yup.string().email("Enter valid email").required("Required field"),
    password: yup
      .string()
      .min(
        MIN_PASSWORD_LENGTH,
        `Must be at least ${MIN_PASSWORD_LENGTH} characters`
      )
      .max(
        MAX_PASSWORD_LENGTH,
        `Must be at most ${MAX_PASSWORD_LENGTH} characters`
      )
      .required("Required field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), "", null], "Passwords must match"),
  })
  .required();

const RegisterScreen = ({ navigation }: TRegisterScreen) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(data);
  };

  const onChangeModePress = () => {
    reset();
    navigation.navigate("Login");
  };

  return (
    <Styled.Root>
      <AuthForm title="Register">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              label="Email:"
              error={errors.email ? errors.email.message : ""}
              keyboardType="email-address"
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              label="Password:"
              error={errors.password ? errors.password.message : ""}
              secureTextEntry
              placeholder="Enter your password"
              maxLength={MAX_PASSWORD_LENGTH}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType="oneTimeCode" // чтобы на iOS не генерировался пароль
              autoCompleteType="off"
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              label="Confirm password:"
              error={errors.confirmPassword?.message || ""}
              lastChild
              secureTextEntry
              placeholder="Confirm password"
              maxLength={MAX_PASSWORD_LENGTH}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType="oneTimeCode" // чтобы на iOS не генерировался пароль
              autoCompleteType="off"
            />
          )}
        />

        <SubmitContainer>
          <SubmitButton onPress={handleSubmit(onSubmit)} disabled={!isValid}>
            Register
          </SubmitButton>
          <ChangeModeText>Don&apos;t have an account?</ChangeModeText>
          <Button title="Login" onPress={onChangeModePress} />
        </SubmitContainer>
      </AuthForm>
    </Styled.Root>
  );
};

export default RegisterScreen;
