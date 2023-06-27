import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    Rockets: rocketSlice,
  },
});

export default store;
