const Employee = require('../models/employeeModel');


// const registerForm = async (req, res) => {
//     try {
//         res.render('index.html')
//         console.log("render");
//     } catch (error) {
//         console.log(error);
//     }
// }

const registerEmployee = async (req, res) => {
    try {
        const employee = Employee({
            email: req.body.email,
            password: req.body.password
        })
        const result = await employee.save()

        res.status(201).json(result)

    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    registerEmployee
}