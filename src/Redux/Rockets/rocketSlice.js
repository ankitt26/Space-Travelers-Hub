import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const fetchdata = createAsyncThunk('fetching rockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const result = response.data;
  return result;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: { rocketdata: [] },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      const Rock = action.payload;
      const newdata = [];
      Rock.forEach((element) => {
        const rocket11 = {
          id: element.id,
          name: element.rocket_name,
          type: element.rocket_type,
          flickr_images: element.flickr_images[0],
        };

        newdata.push(rocket11);
      });
      return {
        ...state,
        rocketdata: newdata,
      };
    });
  },
});

export { fetchdata };
export default rocketSlice.reducer;
