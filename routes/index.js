var express = require('express');
var router = express.Router();
var Tank = require("../models/tanks/tank").Tank

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render('index', { title: 'Express', menu:menu, counter:req.session.counter });
});

module.exports = router;
