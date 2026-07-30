const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    email: String,
    password : {
        type: String,
        require: [true , "Password is required"]
    } 
},
{
    timestamps : true
}
)
export const User = mongoose.models('User' , userSchema)