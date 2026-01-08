import express from 'express';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Ecommerce Backend is running");
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})