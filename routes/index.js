var express = require('express');
var router = express.Router();
var Tank = require("../models/tanks/tank").Tank

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express', menu:menu });
});

module.exports = router;
