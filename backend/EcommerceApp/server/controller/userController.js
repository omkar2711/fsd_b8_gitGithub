
import User from '../model/userModel.js';
import {authentication, authorization} from '../middleware/authentication.js';
import getDetailsFromToken from '../helper/getDetailsFromToken.js';

const getUserDetails = async (req, res) => {
    try{
      
      const token = req.headers['authorization'].split(' ')[1];

      const userIdFromToken = getDetailsFromToken(token);
      const userId = userIdFromToken.userId;
      console.log("User ID from Token in getUserDetails:", userId);
      

    const user = await User.findOne({email: userIdFromToken.email}).select('-password');

     console.log("Fetched User Details:", user);
        if(!user){
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);

    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const getAllUsers = async (req, res) =>{
    try{

        const authenticationResult = await authentication(req, res);
        if(!authenticationResult){
            res.status(401).send("User not authenticated");
        }

        const authorizationResult = await authorization(req, res);
        if(!authorizationResult){
            res.status(403).send("User not authorized");
        }

        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        // Don't allow password updates through this endpoint
        if (updateData.password) {
            return res.status(400).send("Password cannot be updated through this endpoint");
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { ...updateData, updatedAt: Date.now() },
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.status(200).json({ 
            message: "User updated successfully", 
            user: updatedUser 
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        res.status(200).json({ 
            message: "User deleted successfully",
            user: deletedUser
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}




export {
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser
}