import express from 'express';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
import dbConnection from './db/dbConnection.js';
import dotenv from 'dotenv';


const app = express();
const PORT = 3000;

dotenv.config();

//Middleware for parsing JSON
app.use(express.json());

//Connect to Database
dbConnection();


//Test Route
app.get('/', (req,res)=>{
    res.send("Ecommerce Backend is running");
});


//Routes to use
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);



//listening to server on the port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})