const express = require('express')

const employeeController = require('../controller/employeController')

const routes = new express.Router()

// add employee
routes.post('/emp',employeeController.addEmployee)

// view all employee
routes.get('/emp',employeeController.viewAllEmployee)

// view single employee
routes.get('/emp/:id',employeeController.viewSingleEmployee)

// edit employee
routes.put('/emp/:id',employeeController.editEmployee)

// delete employee
routes.delete('/emp/:id',employeeController.deleteEmployee)




module.exports = routes
