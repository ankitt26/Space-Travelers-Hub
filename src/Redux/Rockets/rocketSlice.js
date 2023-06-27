import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchData = createAsyncThunk('fetching rockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error('There is an error in fetching data from the API');
  }
});

const rocketSlice = createSlice({
  name: 'rockets',

  initialState: {
    rocketData: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchData.rejected, (state) => ({
      ...state,
      error: true,
      isLoading: false,
    }));

    builder.addCase(fetchData.fulfilled, (state, action) => {
      const rockets = action.payload;

      const newRocketsData = rockets.map((element) => ({
        id: element.id,
        name: element.rocket_name,
        description: element.description,
        flickr_images: element.flickr_images[3],
      }));

      return {
        ...state,
        rocketData: newRocketsData,
        isLoading: false,
      };
    });
  },
});

export { fetchData };
export default rocketSlice.reducer;
