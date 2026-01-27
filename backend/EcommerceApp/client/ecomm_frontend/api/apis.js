import axios from 'axios';


let backendUrl = "http://localhost:3000";

const checkSever = async () => {
    try{
        const data = await axios.get(backendUrl);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}


const Login = async (loginData) => {
    try{
        const response = await axios.post(`${backendUrl}/api/auth/login`, loginData);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}

const Register = async (registerData) => {
    try{
        const response = await axios.post(`${backendUrl}/api/auth/register`, registerData);
        return response.data;
    }
    catch(err){ 
        console.log(err);
    }
}

export {
    checkSever,
    Login,
    Register
}