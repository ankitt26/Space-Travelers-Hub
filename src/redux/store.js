import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rockets/rocketSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    Rockets: rocketSlice,
    missions: missionsReducer,
  },
});

export default store;
