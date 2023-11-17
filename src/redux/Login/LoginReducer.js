import {
FETCH_LOGIN_FAILURE,
FETCH_LOGIN_REQUEST,
FETCH_LOGIN_SUCCESS
} from "./LoginAction";
const initialstate = {
    Logindata: [],
    loading: false,
    error: ""
}

const LoginReducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_LOGIN_SUCCESS: return {
            loading: false,
            Logindata: action.payload,
            error: ''

        }
        case FETCH_LOGIN_FAILURE: return {
            loading: false,
            Logindata: [],
            error: action.payload
        }
        default : return state
    }
}

export default LoginReducer