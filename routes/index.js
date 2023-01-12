var express = require('express');
var router = express.Router();
var Tank = require("../models/tanks/tank").Tank

/* GET home page. */
router.get('/', function(req, res, next) {
  Tank.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.cookie('greeting', 'Hi!!!').render('index', {
      title: 'Express',
      menu: menu,
      desc: "Добро пожаловать в гайд по классам техники, здесь будет описано какие роли у классов и что от них требует команда"
    });
  })
});

module.exports = router;
