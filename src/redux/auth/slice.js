import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const setCommonState = (state, action) => {
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.name;
  state.token = action.payload.token;
};

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, setCommonState);
    builder.addCase(login.fulfilled, setCommonState);
    builder.addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
