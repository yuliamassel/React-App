// import axios from "axios"

// const api = axios.create({
//     baseURL: process.env.REACT_APP_BACKEND_ZWALLET
// })

// export const transactionRequest = ()=>{
//     return {
//         type: 'TRANSACTION_REQUEST'
//     }
// }

// export const transactionSucces = (data) => {
//     return {
//         type: 'TRANSACTION_SUCCES',
//         payload: data
//     }
// }

// export const transactionError = ()=>{
//     return {
//         type: 'TRANSACTION_ERROR'
//     }
// }

// export const Transfer = (data)=>{
//     return (dispatch) =>{
//         dispatch(transactionRequest())
//         return api.post('/transaction', data)
//         .then((res)=>{
//             console.log("ini hasil transfer",res);
//             // const data = res.data.data
//             dispatch(transactionSucces(data))
//         }).catch((err)=>{
//             const message = err.message
//             dispatch(transactionError(message))
//         })
//     }
// }
