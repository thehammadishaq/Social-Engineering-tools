const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');

router.route('/register').post(employee.registerEmployee)
module.exports = router;