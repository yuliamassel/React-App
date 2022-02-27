import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ZWALLET
})

export const GetUserRequest = ()=>{
    return {
        type: 'GET_USER_REQUEST'
    }
}

export const GetUserSucces = (data) => {
    return {
        type: 'GET_USER_SUCCES',
        payload: data
    }
}

export const GetUserError = ()=>{
    return {
        type: 'GET_USER_ERROR'
    }
}

export const UpdateUserRequest = ()=>{
    return {
        type: 'UPDATE_USER_REQUEST'
    }
}

export const UpdateUserSucces = (data) => {
    return {
        type: 'Update_USER_SUCCES',
        payload: data
    }
}

export const UpdateUserError = ()=>{
    return {
        type: 'UPDATE_USER_ERROR'
    }
}

export const GetUser = ()=>{
    return (dispatch) =>{
        dispatch(GetUserRequest())
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const config = {
          headers : {Authorization : `Bearer ${userInfo.token}`}
        }
        return api.get('/users/profile', config)
        .then((res)=>{
            const data = res.data?.data
            // console.log(data);
            dispatch(GetUserSucces(data))
        }).catch((err)=>{
            const message = err.message
            dispatch(GetUserError(message))
        })
    }
}

export const UpdateUser = (data)=>{
    return (dispatch) =>{
        dispatch(UpdateUserRequest())
        return api.put('/users', data)
        .then((res)=>{
            console.log("ini hasil update",res);
            // const data = res.data.data
            dispatch(UpdateUserSucces(data))
        }).catch((err)=>{
            const message = err.message
            dispatch(UpdateUserError(message))
        })
    }
}


