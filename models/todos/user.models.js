import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true , "Must give me the password"]
    }

}, 
{
    timestamps: true
})

export const User = mongoose.model('User' , userSchema)