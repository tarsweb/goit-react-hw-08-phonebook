import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const fetchContacts = createAsyncThunk("contacts/fetchAll", async ( _ , thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    // token ?
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

const addContact = createAsyncThunk("contacts/addContact", async (text, thunkAPI) =>{
  try {
    const response = await axios.post("/contacts", text);
    // token ?
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

// const updateContact = createAsyncThunk("contacts/deleteContact", async (contactID, thunkAPI) => {
//   try {
//     const response = await axios.delete(`/contacts/${contactID}`);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// })

const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactID, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactID}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export { fetchContacts, addContact, deleteContact }