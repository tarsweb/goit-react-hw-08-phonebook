import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { fetchContacts, addContact, deleteContact } from './operations'

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]))

// Success
const fetchContactsFulfilledReducer = (state, action) =>{
  state.items = action.payload;
}

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
}

const deleteContactFulfilledReducer = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
}
// 
const pendingReducer = state => {
   state.isLoading = true;
}

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
}

const rejectedReducer = (state, action) => {
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
    .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
    .addCase(addContact.fulfilled, addContactFulfilledReducer)
    .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
    
    .addMatcher(getActions("pending"), pendingReducer)
    .addMatcher(getActions("fulfilled"), fulfilledReducer)
    .addMatcher(getActions("rejected"), rejectedReducer)
  },
});

export const contactsReducer = contactsSlice.reducer;