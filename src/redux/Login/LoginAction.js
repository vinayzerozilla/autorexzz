import axios from "axios";
import { LOGIN } from "../../apiroutes";
export const FETCH_LOGIN_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_USERS_FAILURE';
const fetchLoginRequest = () => ({
    type: FETCH_LOGIN_REQUEST
});

const fetchLoginSuccess = (Logindata) => ({
    type: FETCH_LOGIN_SUCCESS,
    payload: Logindata
});

const fetchLoginFailure = (error) => ({
    type: FETCH_LOGIN_FAILURE,
    payload: error
})


export const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchLoginRequest());
      try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const response = await axios.post(LOGIN,{
            "email": "sugandhkumar999@gmail.com",
            "password": "1234"
        });
        const loginData = await response.data;
        if (loginData){
            return loginData
        }
        console.log('logindata',loginData);
        dispatch(fetchLoginSuccess(loginData));
      } catch (error) {
        const errorMsg = error.message;
        dispatch(fetchLoginFailure(errorMsg));
      }
    };
  };
// export const fetchData = () => {
//     return async (dispatch) => {
//       dispatch(fetchLoginRequest());
  
//       try {
//         const response = await axios.post(LOGIN, {
//           "email": "sugandhkumar999@gmail.com",
//           "password": "1234"
//         });
  
//         const loginData = await response.data;
  
//         if (loginData) {
//           return dispatch(fetchLoginSuccess(loginData));
//         } else {
//           console.error('No login data found');
//         }
//       } catch (error) {
//         const errorMsg = error.message;
//         console.error(errorMsg);
//         dispatch(fetchLoginFailure(errorMsg));
//       }
//     };
//   };