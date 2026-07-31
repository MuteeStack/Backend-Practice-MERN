import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        default: 0
    },
    worksIn: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
})

export const Doctor = mongoose.model("Doctor" , doctorSchema)