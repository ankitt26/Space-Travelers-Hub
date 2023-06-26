import { createSlice } from "@reduxjs/toolkit";
const rocketSlice = createSlice({
  name: "rockets",
  initialState: [],
  reducers: {
    addRocket: () => {},
    removeRocket: () => {},
  },
});

export default rocketSlice.reducer;
