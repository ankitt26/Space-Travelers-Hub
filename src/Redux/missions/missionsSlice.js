/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';
export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { mission_id } = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id === mission_id
          ? { ...mission, reserved: true } : mission)),
      };
    },
    leaveMission: (state, action) => {
      const { mission_id } = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id === mission_id
          ? { ...mission, reserved: false } : mission)),
      };
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    [getMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
