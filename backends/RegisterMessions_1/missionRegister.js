import mongoose from "mongoose";


const registerSchema = new mongoose.Schema({
    email:String,
    phone:String,
    password:String,
})

export const registermodel = mongoose.model('register', registerSchema)




