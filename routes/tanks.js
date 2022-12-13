var express = require('express');
var Tank = require('../models/tanks/tank').Tank;
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tanks');
});

/* Страница классов */
router.get("/:nick", function(req, res, next) {
    Tank.findOne({nick:req.params.nick}, function(err,tank){
        if(err) return next(err)
        if(!tank) return next(new Error("Нет такого класса в игре"))
    res.render('tank', {
        title: tank.title,
        picture: tank.avatar,
        desc: tank.desc
        })
    })
})

module.exports = router