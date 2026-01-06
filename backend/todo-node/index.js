import express from 'express'
import listRouter from './router/list.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', listRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})