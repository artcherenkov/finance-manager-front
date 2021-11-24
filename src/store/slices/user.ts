import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../index";
import * as api from "../../utils/api";
import { deleteValue } from "../../utils/api";

interface IAuthState {
  user: {
    id: string;
    email: string;
  };
  isAuthenticated: boolean;

  loginLoading: boolean;
  loginError: string;

  registerLoading: boolean;
  registerError: string;

  userInfoLoading: boolean;
  userInfoError: string;
}
const initialState: IAuthState = {
  user: {
    id: "",
    email: "",
  },
  isAuthenticated: false,

  loginLoading: false,
  loginError: "",

  registerLoading: false,
  registerError: "",

  userInfoLoading: false,
  userInfoError: "",
};

type TLoginArgs = {
  email: string;
  password: string;
};

export const getUserInfo = createAsyncThunk<
  { _id: string; email: string },
  void,
  { rejectValue: string }
>("user/getUserInfo", (registerData, { rejectWithValue }) => {
  return api
    .getUserInfo()
    .then(({ data }) => data)
    .catch((err) => {
      const errorMsg = err.message || "An error occurred";
      return rejectWithValue(errorMsg);
    });
});

export const login = createAsyncThunk<
  void,
  TLoginArgs,
  { dispatch: AppDispatch; rejectValue: string }
>("user/login", (data, { dispatch, rejectWithValue }) => {
  return api
    .login(data)
    .then(() => {
      dispatch(getUserInfo());
    })
    .catch((err) => {
      const errorMsg = err.message || "An error occurred";
      return rejectWithValue(errorMsg);
    });
});

export const register = createAsyncThunk<
  void,
  TLoginArgs,
  { dispatch: AppDispatch; rejectValue: string }
>("user/register", (registerData, { dispatch, rejectWithValue }) => {
  return api
    .register(registerData)
    .then(({ data }) =>
      api.login({ email: data.email, password: registerData.password })
    )
    .then(() => {
      dispatch(getUserInfo());
    })
    .catch((err) => {
      const errorMsg = err.message || "An error occurred";
      return rejectWithValue(errorMsg);
    });
});

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      deleteValue("jwt");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
      state.loginError = "";
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loginLoading = false;
      state.loginError = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
      state.loginLoading = false;
      state.loginError = action.payload || "Unknown Error";
    });

    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
      state.registerError = "";
    });
    builder.addCase(register.fulfilled, (state) => {
      state.registerLoading = false;
      state.registerError = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.registerLoading = false;
      state.registerError = action.payload || "Unknown Error";
    });

    builder.addCase(getUserInfo.pending, (state) => {
      state.userInfoLoading = true;
      state.userInfoError = "";
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfoLoading = false;
      state.userInfoError = "";

      state.user.id = action.payload._id;
      state.user.email = action.payload.email;
      state.isAuthenticated = true;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.userInfoLoading = false;
      state.userInfoError = action.payload || "Unknown Error";
    });
  },
});

export const selectUserId = (state: RootState) => {
  return state.user.user.id;
};
export const selectIsAuthenticated = (state: RootState) => {
  return state.user.isAuthenticated;
};
export const selectUserInfoLoading = (state: RootState) => {
  return state.user.userInfoLoading;
};

export const selectLoginLoading = (state: RootState) => {
  return state.user.loginLoading;
};
export const selectLoginError = (state: RootState) => {
  return state.user.loginError;
};

export const selectRegisterLoading = (state: RootState) => {
  return state.user.registerLoading;
};
export const selectRegisterError = (state: RootState) => {
  return state.user.registerError;
};

const { actions, reducer } = user;
export const { logout } = actions;

export default reducer;
