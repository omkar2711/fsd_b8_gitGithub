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


const getUserDetails = async (token) => {
    try{
        const response = await axios.get(`${backendUrl}/api/users/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
        });
        return response.data;
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

const createProduct = async (productData, token) => {
    try {
        const response = await axios.post(`${backendUrl}/api/products/create`, productData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

const getAllProducts = async (token) => {
    try {
        const response = await axios.get(`${backendUrl}/api/products/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export {
    checkSever,
    getUserDetails,
    Login,
    Register,
    createProduct,
    getAllProducts
}