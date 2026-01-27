import jwt from 'jsonwebtoken';

const authentication = (req, res) => {

    console.log(req.headers);

    const authHeader = req.headers['authorization'];
    console.log("Auth Header:", authHeader);
    
    if(!authHeader){
        return res.status(401).send("Unauthorized: No token provided");
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (err) {
        return false;

    }
}

const authorization = async (req, res ) => {
    try{
        const isAuthenticated = await authentication(req, res);
        if(!isAuthenticated){
            return false;
        }

        const authHeader = req.headers['authorization'];
        console.log("Auth Header for Authorization:", authHeader);
        console.log(req.headers);
    
        if(!authHeader){
            return false;
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        if(decoded.role !== 'admin'){
            return false;
        }

        return true;
    }
    catch(err){
        return false;
    }
}

export {
    authentication,
    authorization
};