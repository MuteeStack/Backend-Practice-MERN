import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        enum: ["Male" , "Female" , "Other"],
        required: true
    },
    BloodGroup: {
        type: String,
        required: true
    },
    AdmitedIn : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
} , {timestamps: true})

export const Patient = mongoose.model("Patient" , patientSchema)