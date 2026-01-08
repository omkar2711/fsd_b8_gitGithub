import { users } from "../database.js";


const userLogin = (req, res ) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).send("Email and password are required");
        }

        if(users.length === 0){
            return res.status(404).send("No users found. Please register first.");
        }

        const user = users.find(u => u.email === email && u.password === password);

        if(!user){
            return res.status(401).send("Invalid email or password");
        }

        res.status(200).send("Login successful");

    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const userRegister = (req, res) => {
    try{

        const id = Date.now().toString();
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(400).send("All fields are required");
        }

        if(password !== confirmPassword){
            return res.status(400).send("Passwords do not match");
        }

        const existingUser = users.find(u => u.email === email);
        if(existingUser){
            return res.status(409).send("User with this email already exists");
        }

        const newUser = {
            id,
            firstName,
            lastName,
            email,
            password
        }
        users.push(newUser);
        res.status(201).send("User registered successfully");
    }
    catch(err){
        res.status(500).send("Server error");
    }
}



export {
    userLogin,
    userRegister
}