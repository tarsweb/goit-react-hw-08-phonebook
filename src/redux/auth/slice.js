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

// const handlePending = state => {
//   console.log("pending");
// }

const handelFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

const handleRejected = (state, action) => {
  state.error = action.payload
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
    //.addCase(register.pending, handlePending)
    .addCase(register.fulfilled, handelFulfilled)
    .addCase(register.rejected, handleRejected)

    // login
    //.addCase(login.pending, handlePending)
    .addCase(login.fulfilled, handelFulfilled)
    .addCase(login.rejected, handleRejected)

    // logout
    //.addCase(logout.pending, handlePending)
    .addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(logout.rejected, handleRejected)

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