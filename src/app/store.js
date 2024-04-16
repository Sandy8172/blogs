import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import descriptionReducer from "../features/description/descriptionSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    description: descriptionReducer,
  },
});
