import User from "../model/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const userLogin = async (req, res ) => {
    try{
       
        const { email, password } = req.body;

        if(!email || !password){
            return  res.status(400).send("Email and password are required");
        }

        let user = await User.findOne({email : email});
        if(!user){
            return res.status(400).send("User does not exist");
        }

        let isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).send("Invalid credentials");
        }

        //Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

     

        res.status(200).send({ message: "Login successful", token: token } );

    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const userRegister = async (req, res) => {
    try{
        const { firstName, lastName, email, password, confirmPassword, role } = req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(400).send("All fields are required");
        }

        if(password !== confirmPassword){
            return res.status(400).send("Passwords do not match");
        }

        let existingUser = await User.findOne({email : email});
        if(existingUser){
            return res.status(400).send("User already exists");
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName: firstName,
            lastName : lastName,
            email: email,
            password: hashedPassword,
            role: role || 'user'
        })

        await newUser.save();
        res.status(201).send("User registered successfully")
       
    }
    catch(err){
        res.status(500).send("Server error");
    }
}



export {
    userLogin,
    userRegister
}