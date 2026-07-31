import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {

    },
    price: {

    },
    description: {

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }

} , {timestamps: true})

export const Product = mongoose.model('Product' , productSchema)