const employee = require('../model/empModel')


// add employee
exports.addEmployee = async (req, res) => {
    console.log("inside add employee");
    const { name, email, department, salary, joinDate } = req.body
    try {
        const existingEmployee = await employee.findOne({ email })
        if (existingEmployee) {
            res.status(409).json("employee already exist!!!")
        } else {
            const newEmployee = new employee({ name, email, department, salary, joinDate })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

// view all employee
exports.viewAllEmployee = async (req, res) => {
    console.log("inside view all employee");
    try {
        const allEmp = await employee.find()
        res.status(200).json(allEmp)

    } catch (err) {
        res.status(500).json(err)
    }
}

// view single employee
exports.viewSingleEmployee = async (req, res) => {
    console.log("inside view single employee");
    const { id } = req.params
    try {
        const singleEmp = await employee.findOne({ _id: id })
        res.status(200).json(singleEmp)
    } catch (err) {
        res.status(500).json(err)
    }
}

// edit employee
exports.editEmployee = async (req, res) => {
    console.log("inside edit employee");
    const { name, email, department, salary, joinDate } = req.body
    const { id } = req.params
    try {
        const editEmp = await employee.findByIdAndUpdate({ _id: id },{ name, email, department, salary, joinDate },{new:true})
        res.status(200).json(editEmp)
    } catch (err) {
        res.status(500).json(err)
    }
}

// delete employee
exports.deleteEmployee = async (req, res) => {
    console.log("inside delete employee");
    const { id } = req.params
    try {
        const deleteEmp = await employee.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteEmp)
    } catch (err) {
        res.status(500).json(err)
    }
}