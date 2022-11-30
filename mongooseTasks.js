var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')
var Tanks = require("./models/tanks/tank").Tanks

var tanks = new Tanks({
    title: "TT",
    nick: "TT"
})

console.log(tanks)
tanks.save(function(){
    console.log(tanks.title)
})
