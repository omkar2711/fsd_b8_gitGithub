import { Router } from "express";

const userRouter = Router();


let userData = {
    name : "John Doe",
    age  : 30,
    email: "john.doe@example.com"
}

userRouter.get("/user", (req,res)=>{
    //data base fetch the data and send it as response
    res.send(userData);
})

userRouter.post("/user", (req,res)=>{
    //data base save the data and send response
    res.send("User created");
})

userRouter.post("/login" , (req,res)=>{
    res.send("User logged in");
})


userRouter.post("/register", (req,res)=>{
    console.log(req.body);
    res.send("user registered");
})


userRouter.delete("/user" , (req,res)=>{
    res.send("User deleted");
})
export default userRouter;