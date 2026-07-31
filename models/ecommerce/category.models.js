import mongoose from 'mongoose'

const categorySchema = new mongoose({
    name: {
        type: String,
        required: true
    }
} )


export const category = mongoose.model('Category' , categorySchema)