import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goalService } from "./goalService";


export const createGoal = createAsyncThunk("api/createGoal", async (goal, thunkApi) => {
    try {
        return goalService.createGoal(goal)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const goalSlice = createSlice({
    initialState,
    name: "Goals",
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (bulider) => {
        bulider.addCase(createGoal.pending, (state) => {
            state.isLoading = true
        }).addCase(createGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
        }).addCase(createGoal.fulfilled, (state, action) => {
            state.isError = false
            state.isSuccess = true
            state.goals = action.payload
        })
    }

})


export const { reset } = goalSlice.actions

export default goalSlice.reducer