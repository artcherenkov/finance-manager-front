import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";

import { logout } from "../../../store/slices/user";
import { useAppDispatch } from "../../../store/hooks";
import { Color } from "../../../const";

const Text = styled.Text`
  color: ${Color.RED};
  font-size: 16px;
`;

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const onLogoutConfirm = () => dispatch(logout());
  const onLogoutPress = () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: onLogoutConfirm },
    ]);
  };

  return (
    <TouchableOpacity onPress={onLogoutPress}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
