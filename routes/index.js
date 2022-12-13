var express = require('express');
var router = express.Router();
var Tank = require("../models/tanks/tank").Tank

/* GET home page. */
router.get('/', function(req, res, next) {
  Tank.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.render('index', {
      title: 'Express',
      menu: menu
    });
  })
});

module.exports = router;
