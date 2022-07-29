import axios from "axios";
const { accessToken } = JSON.parse(localStorage.getItem('user'));
console.log({ bson: accessToken })
const client = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : ""
    }
})

export default client