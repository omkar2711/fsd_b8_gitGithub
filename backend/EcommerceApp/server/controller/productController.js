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
           userId,
           price,
           stock,
           category,
           image
       });

       await newProduct.save();
       res.status(201).json({ message: "Product created successfully", product: newProduct });
    }
    catch(err){
        console.error(err);
        res.status(500).send("Server error");
    }
}

const getAllProducts = async (req,res) => {
    try{
        const products =  await Product.find().populate('userId', '-password');
        res.status(200).json(products);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Server error");
    }
}

// Get single product by ID
const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await Product.findById(productId).populate('userId', '-password');
        
        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.status(200).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

// Update product
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const updateData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { ...updateData, updatedAt: Date.now() },
            { new: true }
        ).populate('userId', '-password');

        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }

        res.status(200).json({ 
            message: "Product updated successfully", 
            product: updatedProduct 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }

        res.status(200).json({ 
            message: "Product deleted successfully",
            product: deletedProduct
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

// Add review to product
const addReview = async (req, res) => {
    try {
        const { productId } = req.params;
        const { rating, comment } = req.body;
        const token = req.headers['authorization'].split(' ')[1];
        const userId = getDetailsFromToken(token).userId;

        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).send("Rating must be between 1 and 5");
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        product.reviews.push({
            userId,
            rating,
            comment
        });

        // Calculate average rating
        const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        product.rating = totalRating / product.reviews.length;

        await product.save();
        const updatedProduct = await Product.findById(productId).populate('reviews.userId', '-password');

        res.status(200).json({ 
            message: "Review added successfully", 
            product: updatedProduct 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

export { 
    createProduct, 
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addReview
};