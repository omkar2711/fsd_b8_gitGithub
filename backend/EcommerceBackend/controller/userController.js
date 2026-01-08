import { users } from '../database.js';

const getUserDetails = (req, res) => {
    try{
        const userId = req.params.id;
        const user = users.find(u => u.id == userId);
        if(!user){
            return res.status(404).send("User not found");
        }

        res.status(200).json(user);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const getAllUsers = (req, res) =>{
    try{
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const updateUser = (req,res) => {
    try{
        const userId = req.params.id;
        const updateData = req.body;

        let userFound = false;

        const userExist = users.find(user=>{
            if(user.id == userId){
                userFound = true;
            }
        });

        users = users.map(user=>{
            if(user.id == userId){
                return { ...user, ...updateData };
            }
            return user;
        });
        

        if(!userFound){
            return res.status(404).send("User not found");
        }

        res.status(200).send("User updated successfully" , users);
    }
    catch(err){
        res.status(500).send("Server error"); 
    }
}


const deleteUser = (req, res) => {
    try{
        const userId = req.params.id;
        const initialLength = users.length;
        const updatedUsers = users.filter(user => user.id != userId);

        // if(users.length == initialLength){
        //     return res.status(404).send("User not found");
        // }

        res.status(200).send(updatedUsers);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}




export {
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser
}