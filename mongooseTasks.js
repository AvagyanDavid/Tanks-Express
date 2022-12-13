var mongoose = require('mongoose')
mongoose.connect('mongodb:/127.0.0.1:27017/test')
var Tanks = require("./models/tank/tank").Tank

var tank = new Tank({
    title: "TT",
    nick: "TT"
})

console.log(tank)
tanks.save(function(){
    console.log(tank.title)
})
