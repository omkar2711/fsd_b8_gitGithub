import mongoose from "mongoose";
import User from "./userModel.js";

//Embedded User Schema

const productSchema = new mongoose.Schema({
    id :{type: mongoose.Schema.Types.ObjectId},
    name : { type: String, required: true },
    description : { type: String, required: true },
    userId : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    price : { type: Number, required: true, min: 0 },
    stock : { type: Number, required: true, min: 0 },
    category : { type: String, required: true },
    image : { type: String, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 },
            comment: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


const Product = mongoose.model("Product" , productSchema);

export default Product;