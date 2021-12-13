import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import * as api from "../../utils/api";
import { TExpense, TServerExpense } from "../../types/expense";

interface IDataState {
  expenses: TServerExpense[];
  expensesLoading: boolean;
  expensesError: string;
}
const initialState: IDataState = {
  expenses: [],
  expensesLoading: false,
  expensesError: "",
};

export const getExpenses = createAsyncThunk<
  TServerExpense[],
  void,
  { rejectValue: string }
>("data/get-expenses", (registerData, { rejectWithValue }) => {
  return api
    .getExpenses()
    .then(({ data }) => data)
    .catch((err) => {
      const errorMsg = err.message || "An error occurred";
      return rejectWithValue(errorMsg);
    });
});

export const postExpense = createAsyncThunk<
  TServerExpense,
  TExpense,
  { rejectValue: string }
>("data/post-expense", (data, { rejectWithValue }) => {
  return api
    .postExpense(data)
    .then(({ data }) => data)
    .catch((err) => {
      const errorMsg = err.message || "An error occurred";
      return rejectWithValue(errorMsg);
    });
});

export const data = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExpenses.pending, (state) => {
      state.expensesLoading = true;
      state.expensesError = "";
    });
    builder.addCase(getExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload;
      state.expensesLoading = false;
      state.expensesError = "";
    });
    builder.addCase(getExpenses.rejected, (state, action) => {
      state.expensesLoading = false;
      state.expensesError = action.payload || "Unknown Error";
    });

    builder.addCase(postExpense.pending, (state) => {
      state.expensesLoading = true;
      state.expensesError = "";
    });
    builder.addCase(postExpense.fulfilled, (state, action) => {
      state.expenses = [...state.expenses, action.payload];
      state.expensesLoading = false;
      state.expensesError = "";
    });
    builder.addCase(postExpense.rejected, (state, action) => {
      state.expensesLoading = false;
      state.expensesError = action.payload || "Unknown Error";
    });
  },
});

export const selectExpenses = (state: RootState) => {
  return state.data.expenses;
};

export const selectExpensesLoading = (state: RootState) => {
  return state.data.expensesLoading;
};

const { reducer } = data;

export default reducer;
