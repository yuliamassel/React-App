// import React, { createContext, useEffect, useState } from "react";
// import axios from 'axios'

// export const userContext = createContext(null);
// const UserContext = ({children}) => {
//     const [user, setUser] = useState(null)
//     useEffect(() => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             axios({
//                 baseURL : `${process.env.REACT_APP_BACKEND_ZWALLET}`,
//                 method: 'GET',
//                 url : `/users/${token}`
//             })
//             .then((res) => {
//                 const result = res.data.data[0]
//                 setUser(result)
//             })
//             .catch((err) => {
//                 console.log(err.response)
//             })
//         }
//     }, [])
//     console.log(user)
//     return (
//         <userContext.Provider value={{ user, setUser }}>
//             {children}
//         </userContext.Provider>
//     )
// }

// export default UserContext