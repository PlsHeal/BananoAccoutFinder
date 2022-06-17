import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/counter/accountSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
