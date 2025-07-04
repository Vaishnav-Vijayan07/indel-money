import api from "@/lib/api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchActiveJobsData = createAsyncThunk("jobs/fetchActiveJobs", async ({ state, role, location }, { rejectWithValue }) => {

    const params = {}

    if (state) params.state = state
    if (role) params.role = role
    if (location) params.location = location

    try {
        const response = await api.get("/web/career-active-jobs", { params: params });
        if (response.data.status !== "success") {
            return rejectWithValue(response.data.message || "Failed to fetch ActiveJobs data");
        }
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch ActiveJobs data");
    }
});

const activeJobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActiveJobsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActiveJobsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.jobs;
            })
            .addCase(fetchActiveJobsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setActiveJobsData, clearActiveJobsData } = activeJobsSlice.actions;
export default activeJobsSlice.reducer;
