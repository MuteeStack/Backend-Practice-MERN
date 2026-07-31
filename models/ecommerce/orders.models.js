import mongoose from 'mongoose'
const orderItemsSchema = new mongoose.Schema({
    prodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    orderItems: {
        type: [orderItemsSchema]
    },
    status:  {
        type: String,
        enum: ["PENDING" , "DELIVERED" , "CANCELED"],
        default: "PENDING"
    }
} , {timestamps: true})

export const Order = mongoose.model("Order" , orderSchema)