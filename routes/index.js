var express = require('express');
var router = express.Router();
var Tank = require("../models/tanks/tank").Tank
var User = require("./../models/tanks/user").User

/* GET home page. */
router.get('/', function(req, res, next) {
  Tank.find({},{_id:0,title:1,nick:1},function(err){
    res.cookie('greeting', 'Hi!!!').render('index', {
      title: 'Express',
      desc: "Добро пожаловать в гайд по классам техники, здесь будет описано какие роли у классов и что от них требует команда",
      counter:req.session.counter});
  })
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход',error:null});
  });

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username: username}, function(err, user) {
    if(err) return next(err)
    if(user) {
        if(user.checkPassword(password)) {
            req.session.user = user._id
            res.redirect('/')
        } else {
            res.render('logreg', {title: 'Вход',error: "Пароль неверный"})
        }
    } else {
        var user = new User ({username: username, password: password})
        user.save(function(err, user) {
            if(err) return next(err)
            req.session.user = user._id
            res.redirect('/')
        })
    }
})
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

module.exports = router;
