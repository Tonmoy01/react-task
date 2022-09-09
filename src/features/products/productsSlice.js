import { getProducts, postProduct } from './productsAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: '',
};

// async thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ search }) => {
    const products = await getProducts(search);
    return products;
  }
);

export const addProducts = createAsyncThunk(
  'products/addProduct',
  async (data) => {
    const products = await postProduct(data);
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        let reverseData = action.payload.reverse();
        state.products = reverseData;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.isError = true;
        state.error = action.error?.message;
        console.log(action.error.message);
      })
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productsSlice.reducer;
