import Product from '../model/productModel.js'
import getDetailsFromToken from "../helper/getDetailsFromToken.js";


const createProduct = async(req,res)=>{
    try{
       const { name, description, price, stock, category, image } = req.body;
       const token = req.headers['authorization'].split(' ')[1];
       const userId = getDetailsFromToken(token).userId;

       const newProduct = new Product({
           name,
           description,
           User: userId,
           price,
           stock,
           category,
           image
       });

       await newProduct.save();
       res.status(201).json({ message: "Product created successfully", product: newProduct });
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

const getAllProducts = async (req,res) => {
    try{
        const products =  await Product.find().populate('User', '-password');
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

export { createProduct, getAllProducts };