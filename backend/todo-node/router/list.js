import {Router} from 'express';

const listRouter = Router();

let toDoList = [];
//datbase

listRouter.get('/todos', (req, res)=>{
    res.send(toDoList);
})

listRouter.post('/todos', (req, res)=>{
    const data = req.body;
    if(!data.id || !data.listItem){
        return res.status(400).send("Invalid todo item");
    }
    toDoList.push(data);
    res.status(201).send("Todo item added");
})

listRouter.put('/todos/:id', (req, res)=>{
    const id = req.params.id;
    const updatedItem = req.body;
    toDoList = toDoList.map((item)=>{
        if(item.id == id){
            return updatedItem;
        }
        return item;
    })
    res.send("Todo item updated");
})

listRouter.delete('/todos/:id', (req, res)=>{
    const id = req.params.id;
    toDoList = toDoList.filter((item)=> item.id != id);
    res.send("Todo item deleted");
})


export default listRouter;

