var express = require('express');
var router = express.Router();
var Tank = require('../models/tanks/tank').Tank
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tanks');
});

/* Страница классов */
router.get("/:nick", function(req, res, next){
async.parallel([
    function(callback){
        Tank.findOne({nick:req.params.nick},callback)
    },
    function(callback){
        Tank.find({},{_id:0,title:1,nick:1},
        callback)
    }
],
    function(err,result){
        if(err) return next(err)
        var tank = result[0]
        var tanks = result[1] || []
        if(!tank) return next(new Error("Нет такого класса в игре"))
        console.log(tank.avatar)
        res.render('tank', {
            title: tank.title,
            picture: tank.avatar,
            desc: tank.desc,
            menu:tanks
        });
    })
})

module.exports = router