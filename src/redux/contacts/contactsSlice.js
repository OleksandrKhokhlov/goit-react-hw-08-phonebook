import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  if (state.items.length > 0) {
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items.splice(index, 1);
  }
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
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addCase(deleteContact.rejected, handleRejected);
  },

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     if (state.items.length > 0) {
  //       const index = state.items.findIndex(
  //         contact => contact.id === action.payload.id
  //       );
  //       state.items.splice(index, 1);
  //     }
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactReducer = contactsSlice.reducer;
