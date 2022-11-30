var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World of Tanks',
  desc: "Добро пожаловать в гайд по классам техники, здесь будет описано какие роли у классов и что от них требует команда"});
});

module.exports = router;
