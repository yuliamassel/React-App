import { combineReducers } from "redux";

import {UserLogin, RegisterUser, GetUser, UpdateUser} from './users'
import ChangePhoto from "./App/uploadFille";
// import UserTransfer from './transaction'

const rootReducers = combineReducers({
    UserLogin,
    RegisterUser,
    GetUser,
    UpdateUser,
    ChangePhoto
})

export default rootReducers