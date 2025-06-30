// store/slices/careerFormSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/lib/api/axios';
import { toast } from 'sonner';

export const submitCareerForm = createAsyncThunk(
    'careerForm/submit',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post('/web/career/resume', formData);
            toast({
                title: "Success",
                description: "Application submitted successfully.",
            });
            return response.data;
        } catch (error) {
            toast({
                title: "Error",
                description: error?.response?.data?.message || "Failed to submit application.",
                variant: "destructive",
            });
            return rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);

const careerFormSlice = createSlice({
    name: 'careerForm',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitCareerForm.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitCareerForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitCareerForm.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

export const { resetStatus } = careerFormSlice.actions;
export default careerFormSlice.reducer;
