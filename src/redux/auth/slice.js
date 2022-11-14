import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from  'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(register.pending, console.log("Загружаем..."))

    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(register.rejected, (_, action) => console.log(action.payload));
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);