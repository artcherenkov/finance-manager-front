import * as SecureStore from "expo-secure-store";
import { TExpense, TServerExpense } from "../types/expense";
// const API_URL = "http://51.250.16.78:3000";
const API_URL = "http://localhost:3030";

const HEADERS = {
  "Content-Type": "application/json",
};

export const saveValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValue = async (key: string) => {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  }
};

export const deleteValue = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

export const getResponseData = async (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  const data = await res.json();
  return Promise.reject(new Error(data.message));
};

export const login = ({ email = "", password = "" }) =>
  fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: HEADERS,
  })
    .then(getResponseData)
    .then((data) => {
      saveValue("jwt", data.token);
      return data;
    });

export const register = ({ email = "", password = "" }) =>
  fetch(`${API_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: HEADERS,
  }).then(getResponseData);

export const getUserInfo = async () => {
  const token = await getValue("jwt");
  return fetch(`${API_URL}/user`, {
    headers: { ...HEADERS, Authorization: `Bearer ${token}` },
  }).then(getResponseData);
};

export const postExpense = async (data: TExpense) => {
  const token = await getValue("jwt");

  return fetch(`${API_URL}/expenses`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { ...HEADERS, Authorization: `Bearer ${token}` },
  }).then(getResponseData);
};

export const getExpenses = async (): Promise<{ data: TServerExpense[] }> => {
  const token = await getValue("jwt");

  return fetch(`${API_URL}/expenses`, {
    headers: { ...HEADERS, Authorization: `Bearer ${token}` },
  }).then(getResponseData);
};
