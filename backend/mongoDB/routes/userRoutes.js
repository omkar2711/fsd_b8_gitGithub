import { Router } from 'express';
import {
    getUserDetails,
    deleteUserDetails,
    createUserDetails,
    updateUserDetails
} from '../controller/user.js'

const userRouter = Router();


userRouter.get('/getUserDetails' , ()=>{});

userRouter.post('/createUser' , ()=>{});

userRouter.put('/updateUser' , ()=>{})

userRouter.delete('/deleteUser' , ()=>{})


export default userRouter;