import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUserId: null,
  searchTerm: '',
  filters: {
    role: 'all',
    isActive: true,
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetUserFilters: (state) => {
      state.searchTerm = '';
      state.filters = initialState.filters;
    },
  },
});


export const { 
  setSelectedUserId, 
  setSearchTerm, 
  updateFilters, 
  resetUserFilters 
} = usersSlice.actions;


export const selectSelectedUserId = (state) => state.users.selectedUserId;
export const selectUserSearchTerm = (state) => state.users.searchTerm;


export default usersSlice.reducer;