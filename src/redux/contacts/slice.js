import { createSlice } from '@reduxjs/toolkit'

import { fetchContacts, addContact, deleteContact } from './operations'

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      return state;
    })
    .addCase(fetchContacts.rejected, handleRejected)

    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      return state
    })
    .addCase(addContact.rejected, handleRejected)

    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      return state
    })
    .addCase(deleteContact.rejected, handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;