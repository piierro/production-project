import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  userName: '',
  password: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;