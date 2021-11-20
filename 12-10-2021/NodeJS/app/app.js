var dataFile = require('../data/data.json');
var express = require('express');
var app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', function(req, res) {
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
app.server = app.listen(app.get("port"));
console.log('Server is running on port: ' + app.get('port'));