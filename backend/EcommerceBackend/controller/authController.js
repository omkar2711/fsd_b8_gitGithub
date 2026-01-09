import User from "../model/userModel.js";


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

        if(user.password !== password){
            return res.status(400).send("Invalid credentials");
        }

        res.status(200).send("User logged in successfully");

    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const userRegister = async (req, res) => {
    try{
        const { firstName, lastName, email, password, confirmPassword } = req.body;

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

        const newUser = new User({
            firstName: firstName,
            lastName : lastName,
            email: email,
            password: password,
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