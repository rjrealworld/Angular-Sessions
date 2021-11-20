var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');

router.get('/employees', function(req, res) {
    var result = "";
    dataFile.employees.forEach(employee => {
        result += `
            <li>
                <h2>${employee.empId}</h2>
                <h2>${employee.empName}</h2>
                <h2>${employee.salary}</h2>
            </li>
        `
    });
    res.send(`${result}`);
});

// router.get('/employees/:index', function(req, res) {
//     var index = req.params.index;
//     var employee = dataFile.employees[index];
//     res.send(`
//         ${employee.empId}
//         ${employee.empName}
//         ${employee.salary}
//     `);
// });

router.get('/employees/:id', function(req, res) {
    var id = req.params.id;
    dataFile.employees.forEach(employee => {
        if(employee.empId == id) {
            res.send(`
                ${employee.empId}
                ${employee.empName}
                ${employee.salary}
            `);
            res.end();
        }
    });
});

module.exports = router;
