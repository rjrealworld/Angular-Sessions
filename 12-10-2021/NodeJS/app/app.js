var dataFile = require('../data/data.json');
var express = require('express');
var app = express();

app.set("port", process.env.PORT || 3000);

app.use(require('../employees/welcome'));
app.use(require('../employees/employees'));

app.server = app.listen(app.get("port"));
console.log('Server is running on port: ' + app.get('port'));