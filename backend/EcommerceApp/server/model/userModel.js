import mongoose, { Schema } from "mongoose";



const userSchema = new mongoose.Schema({
    id :{type: mongoose.Schema.Types.ObjectId},
    firstName : { type: String, required: true },
    lastName : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    phone : { type: String, default: '' },
    address : {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    role : { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema);

export default User;