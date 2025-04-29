import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchHomeData = createAsyncThunk("home/fetchHomeData", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3000/api/home", { timeout: 5000 });
    if (response.data.status !== "success") {
      return rejectWithValue(response.data.message || "Failed to fetch home data");
    }
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch home data");
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeData(state, action) {
      console.log("setHomeData", action.payload);
      
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearHomeData(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setHomeData, clearHomeData } = homeSlice.actions;
export default homeSlice.reducer;
