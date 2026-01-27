import express from 'express'
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';
import dbConnection from './db/dbConnection.js';

const app = express();
const PORT = 3000;

dotenv.config();

dbConnection();

app.use(express.json());


app.use('/api/user' , userRouter);


//listening to server on the port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})