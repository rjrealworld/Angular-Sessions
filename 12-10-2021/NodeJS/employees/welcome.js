var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`<h3>Welcome to Node JS Routing</h3>`);
});

module.exports = router;