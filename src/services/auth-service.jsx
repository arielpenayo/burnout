import axios from "axios"; 
const API_URL = import.meta.env.VITE_API_URL;

const loginUser = (username, email, password, isMedic) => {
    if (isMedic) {
        return axios
            .post(API_URL + "login/", { email, password })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        return axios
            .post(API_URL + "users/", { username })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

const AuthService = {
    loginUser
};

export default AuthService;