import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ZWALLET
})


export const UserLoginRequest = ()=>{
    return {
        type: 'USER_LOGIN_REQUEST'
    }
}

export const UserLoginSucces = (data) => {
    return {
        type: 'USER_LOGIN_SUCCES',
        payload: data
    }
}

export const UserLoginFail = ()=>{
    return {
        type: 'USER_LOGIN_FAIL'
    }
}

export const RegisterRequest = ()=>{
    return {
        type: 'REGISTER_USER_REQUEST'
    }
}

export const RegisterSucces = (data) => {
    return {
        type: 'REGISTER_USER_SUCCES',
        payload: data
    }
}

export const RegisterFail = ()=>{
    return {
        type: 'REGISTER_USER_FAIL'
    }
}


export const UserLogin = (data)=>{
    // const navigate = useNavigate()
    console.log('hasilnya',data);
    return (dispatch) =>{
        dispatch(UserLoginRequest())
        return api.post('/users/login', data.form)
        .then((res)=>{
            const result = res.data.data
            console.log(result);
            localStorage.setItem('userInfo', JSON.stringify({id:result.id, token:result.token}))
            const data = res.data
            dispatch(UserLoginSucces(data))
        }).catch((err)=>{
            const message = err.message
            dispatch(UserLoginFail(message))
        })
    }
}

export const RegisterUser = (data)=>{
    return (dispatch) =>{
        dispatch(RegisterRequest())
        return api.post('/users/register', data.form)
        .then((res)=>{
            const data = res.data.data
            dispatch(RegisterSucces(data))
        }).catch((err)=>{
            const message = err.message
            dispatch(RegisterFail(message))
        })
    }
}