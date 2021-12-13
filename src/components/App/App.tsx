import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../../store";

import { ActivityIndicator } from "react-native";

import LoginScreen from "../../screens/Login/Login";
import RegisterScreen from "../../screens/Register/Register";
import HomeScreen from "../../screens/Home/Home";

import HeaderText from "../HeaderText/HeaderText";
import { useAppSelector } from "../../store/hooks";
import {
  selectIsAuthenticated,
  getUserInfo,
  selectUserInfoLoading,
} from "../../store/slices/user";
import styled from "styled-components/native";
import LogoutButton from "../ui/LogoutButton/LogoutButton";

const AUTH_SCREEN_OPTIONS = () => ({
  headerLeft: () => <></>,
  headerTitle: HeaderText,
});

const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Stack = createNativeStackNavigator();

const Router = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const userInfoLoading = useAppSelector(selectUserInfoLoading);

  if (userInfoLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" />
      </LoadingContainer>
    );
  }

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={HomeScreen}
            options={{
              title: "",
              headerRight: LogoutButton,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={AUTH_SCREEN_OPTIONS}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={AUTH_SCREEN_OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const dispatch = store.dispatch;

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
