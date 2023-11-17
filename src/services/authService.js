import axios from "axios";
import { LOGIN } from "../apiroutes";
const authservices = {
    login:async(username, password) => {
        return await axios.post(LOGIN, {
            'email': username,
            'password': password
          });
    }
}

export default authservices;