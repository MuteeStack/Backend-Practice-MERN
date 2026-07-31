import mongoose from "mongoose"
const workSchema =  new mongoose.Schema({
    Timing: {
        type: TimeRanges,
        required: true
    },
    hospitalDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
})
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
    worksIn: [workSchema]
})

export const Doctor = mongoose.model("Doctor" , doctorSchema)