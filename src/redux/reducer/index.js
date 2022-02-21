import { combineReducers } from "redux";

import {UserLogin, RegisterUser, GetUser, UpdateUser} from './users'

const rootReducers = combineReducers({
    UserLogin,
    RegisterUser,
    GetUser,
    UpdateUser
})

export default rootReducers