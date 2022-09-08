const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  tag: '',
  search: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterBYTag: (state, action) => {
      state.tag = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterBYTag, searched } = filterSlice.actions;
