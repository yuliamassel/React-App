import axios from "axios"

const token = localStorage.getItem('token')
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ZWALLET,
    headers: {'Authorization' : `Bearer ` + token}
})