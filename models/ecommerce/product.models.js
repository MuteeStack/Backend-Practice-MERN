import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    // you can store images pdfs videos etc in the form of buffer in mongodb but we don't do this because it make 
    // db too heavy so we use services like clodinary or aws to store our images they give us a url that url we store here in our db so 
    image: {
        type: String
    },
    // order doesn't matters in object but matters in array
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
} , {timestamps: true})

export const Product = mongoose.model('Product' , productSchema)