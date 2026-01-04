import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({
    patientName: {
        type: String,
    },
    doctorName: {
        type: String,
    },
    specialization: {
        type: String,
    },
    appointmentDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["pending","confirmed", "Completed", "Cancelled",],
    },
    notes: {
        type: String,
    },
    userName:{
        type: String,
    },
    password: {
        type: String,
    },
    role:{
        type: String,
        enum: ["admin","doctor", "patient"],
    }
});
const Medical = mongoose.model("Medical", medicalSchema);
export default Medical;