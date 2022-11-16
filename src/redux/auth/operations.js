import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const getDescriptionError = (errorDescription) => {
  const includeField = [errorDescription["path"] , errorDescription["value"]];
  const forString = errorDescription.message.split(" ").filter((word) => !includeField.some(field => word.includes(field)))
  forString.splice(0, 1, errorDescription["path"][0].toUpperCase() + errorDescription["path"].slice(1) );
  return forString.join(" ")
}

const getFullError = (error) => {

  if (!error) return ''

  // if (error?.response?.data?.errors) {
  //   console.log(Object.keys(error.response.data.errors));
  //   const result = {};
  //   for (let key in error.response.data.errors) {
  //     console.log(key);
  //     result[key] = error.response.data.errors[key].message;
  //   }
  //   return result;
  // }

  if (error?.response?.data?.errors) {
    const objError = {};
    if (error?.response?.data?._message) objError["message"] = error?.response.data._message
    return Object.keys(error.response.data.errors).reduce((acc, key) => acc = {...acc, [key] : getDescriptionError(error.response.data.errors[key])}, objError)
  }
  // return error.response.data.errors
}

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(`${error.message} : ${error?.response?.data?._message} : ${getStringError(error)}`);
      return thunkAPI.rejectWithValue({message : error.message, ...getFullError(error) });
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({message : error.message, ...getFullError(error) });
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout')
      clearAuthHeader();
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({message : error.message, ...getFullError(error) });
    }
  }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { register, login, logout }