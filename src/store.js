import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './redux/Rockets/rocketSlice';
import missionsReducer from './redux/missions/missionsSlice';

const store = configureStore({
  reducer: {
    Rockets: rocketSlice,
    missions: missionsReducer,
  },
});

export default store;
