import User from '../model/userModel.js'

const getUserDetails = async () => {
    try{
        const data = await User.find();
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

const updateUserDetails = async () => {
    try{
        const {name , age , email } = req.body;
       const data = await User.updateOne({name : name} , {$set : {age : age }})
       res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

const createUserDetails = async (req, res) =>{
    try{
        const { name , age, email } = req.body;

        const data = await User.insertOne({name : name , age : age , email : email});
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

const deleteUserDetails = async (req, res) => {
    try{
        const {name} = req.body;
        const data = await User.deleteOne({name : name})
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
} 


export {
    getUserDetails,
    deleteUserDetails,
    createUserDetails,
    updateUserDetails
}