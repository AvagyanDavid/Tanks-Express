var Tank = require("../models/tanks/tank").Tank

module.export = function(req,res,next){
    res.locals.nav = []
  
    Tank.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })
  }