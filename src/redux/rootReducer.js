import { combineReducers } from '@reduxjs/toolkit'
import LoginReducer from './Login/LoginReducer'

const rootReducer = combineReducers({
    login:LoginReducer
})

export default rootReducer
