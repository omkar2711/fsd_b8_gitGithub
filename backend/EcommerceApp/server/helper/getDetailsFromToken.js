import jwt from 'jsonwebtoken';
const getDetailsFromToken = (token) => {
    try{
        console.log("Token in getDetailsFromToken:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token in getDetailsFromToken:", decoded);
        return decoded;
    }
    catch(err){
        return null;
    }
}

export default getDetailsFromToken;