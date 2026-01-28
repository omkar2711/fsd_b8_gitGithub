import mongoose from "mongoose";
import User from "./userModel.js";

//Embedded User Schema

const productSchema = new mongoose.Schema({
    id :{type: mongoose.Schema.Types.ObjectId},
    name : { type: String, required: true },
    description : { type: String, required: true },
    User : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    price : { type: Number, required: true },
    stock : { type: Number, required: true },
    category : { type: String, required: true },
    image : { type: String, required: true  }
})


const Product = mongoose.model("Product" , productSchema);

export default Product;