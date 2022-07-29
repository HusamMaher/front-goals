import { configureStore } from '@reduxjs/toolkit';
import goalReducer from "../features/goals/goalsSlice"
import authReducer from "../features/auth/authSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer
  },
});
