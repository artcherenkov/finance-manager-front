import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../../store";

import { ActivityIndicator, TouchableOpacity, Text } from "react-native";

import LoginScreen from "../../screens/Login/Login";
import RegisterScreen from "../../screens/Register/Register";
import HomeScreen from "../../screens/Home/Home";

import HeaderText from "../HeaderText/HeaderText";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectIsAuthenticated,
  getUserInfo,
  selectUserInfoLoading,
  logout,
} from "../../store/slices/user";
import styled from "styled-components/native";

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
  const dispatch = useAppDispatch();
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
              headerRight: () => (
                <TouchableOpacity onPress={() => dispatch(logout())}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
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
