const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    joinDate: {
        type: String,
        required: true
    }
})

const employee = mongoose.model("employes", employeeSchema)
module.exports = employee