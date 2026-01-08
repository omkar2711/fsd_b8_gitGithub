import { products } from "../database.js";


const createProduct= (req,res)=>{
    try{
        const { name, description, price, stock, category } = req.body;

        if(!name || !description || !price || !stock || !category){
            return res.status(400).send("All fields are required");
        }

        const newProduct = {
            id : "PR" + Date.now().toString(),
            name,
            description,
            price,
            stock,
            category
        }

        products.push(newProduct);
        res.status(201).send("Product created successfully");
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const getAllProducts = (req,res) => {
    try{
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

export { createProduct, getAllProducts };