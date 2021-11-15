import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/Login/Login";
import RegisterScreen from "../../screens/Register/Register";
import HeaderText from "../HeaderText/HeaderText";

const AUTH_SCREEN_OPTIONS = () => ({
  headerLeft: () => <></>,
  headerTitle: HeaderText,
});

const Stack = createNativeStackNavigator();

const AuthRouter = () => {
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
  return <AuthRouter />;
};

export default App;
