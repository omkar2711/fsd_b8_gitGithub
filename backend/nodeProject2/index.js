import express from 'express'
import userRouter from './router/user.js';
const app = express()
const port = 3000

app.use(express.json()); //middleware to parse JSON bodies

app.use('/api/user',userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
