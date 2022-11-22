import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from  'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register, login, logout, refreshUser } from './operations';

const extraActions = [register, login];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]))

//Custom 
const logoutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}

const refreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const refreshUserPendingRejectedReducer = (state, action) => {
  state.isRefreshing = action.type.endsWith("pending") ? true : false;
}
// const refreshUserPendingReducer = state => {
//   state.isRefreshing = true;
// }

// const refreshUserRejectedReducer = state => {
//   state.isRefreshing = false;
// }

//

// const pendingReducer = state => {
//   console.log("pending");
// }

const fulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
}

const rejectedReducer = (state, action) => {
  state.error = action.payload
}

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
    .addCase(logout.fulfilled, logoutFulfilledReducer)
    .addCase(logout.rejected, rejectedReducer)

    //refreshUser
    .addCase(refreshUser.pending, refreshUserPendingRejectedReducer)
    .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
    .addCase(refreshUser.rejected, refreshUserPendingRejectedReducer)

    // .addMatcher(getActions("pending"), pendingReducer)
    .addMatcher(getActions("fulfilled"), fulfilledReducer)
    .addMatcher(getActions("rejected"), rejectedReducer)
  },
});

export const { resetError } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);