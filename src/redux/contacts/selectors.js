import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from 'redux/filter/selectors'

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectShowContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
   if (!filter) return contacts;
   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});

export const selectContactsName = createSelector([selectContacts], contacts => {
  return contacts.reduce((acc, element) => acc = [...acc, element.name.toLowerCase()],[])
});