import express from 'express';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import dbConnection from './db/dbConnection.js';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
const PORT = 3000;

dotenv.config();

//Middleware for parsing JSON
app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));


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
app.use('/api/orders', orderRouter);



//listening to server on the port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})