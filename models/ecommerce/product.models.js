import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
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