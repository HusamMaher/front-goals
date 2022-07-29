import axios from "axios"

const API_SignUp = "/api/auth/signup"
const API_SignIn = "/api/auth/signin"

const register = async (userData) => {
    const response = await axios.post(API_SignUp, userData)

    if (response.data) {

        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}
const logout = () => {
    console.log("clear");
    localStorage.removeItem("user")
    console.log("finish");
}
const login = async (userData) => {

    const response = await axios.post(API_SignIn, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    } return response.data


}

const authService = {
    register, logout, login
}
export default authService