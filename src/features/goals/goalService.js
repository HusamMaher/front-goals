import client from "../../config/http.cofig"
const api_path = "/api/goals"

const createGoal = async (goal) => {
    const response = await client.post(api_path, goal)
    return response.data
}
export const goalService = { createGoal }