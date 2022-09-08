import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../features/filters/filtersSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		filters: filtersSlice,
	},
});
