import mongoose from "mongoose"
const todoSchema = mongoose.Schema({

},
{
    timestamps: true
})

export const todos = mongoose.model('Todo' , todoSchema)