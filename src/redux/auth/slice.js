import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from  'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error : null,
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
    // register
    .addCase(register.pending, console.log("Проверка ..."))
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(register.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload
    })

    // login
    .addCase(login.pending, console.log("login"))
    .addCase(login.fulfilled, (state, action) => {
      console.log("action", action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    })

    // logout
    .addCase(logout.pending, console.log(("Выход...")))
    .addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
    })

    //refreshUser
    .addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    })
  },
});

export const { resetError } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);