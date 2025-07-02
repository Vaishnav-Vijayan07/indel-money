import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import activeJobsReducer from "./slices/activeJobsSlice";
import careerFormReducer from "./slices/careerFormSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    jobs: activeJobsReducer,
    careerForm: careerFormReducer
  },
});
