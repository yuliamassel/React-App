import { axiosInstance } from "./Axios"

const url = '/users'

export const register = (data)=>{
    return axiosInstance.post(url + '/register',data )
}
export const login = (data)=>{
    return axiosInstance.post(`${url}/login`, data)
}