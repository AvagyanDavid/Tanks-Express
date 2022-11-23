var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World of Tanks',
  desc: "Добро пожаловать в гайд по классам техники, здесь будет описано какие роли у классов и что от них требует команда"});
});

/* Тяжелые танки */
router.get('/heavy_tank', function(req, res, next) {
  res.render('tank', {
    title: "Тяжелые танки",
    picture: "images/ИС_3.jpg",
    desc: "Самый бронированный класс техники"
  });
});

/* Средние танки */
router.get('/average_tank', function(req, res, next) {
  res.render('tank', {
    title: "Средние танки",
    picture: "images/Т-34-85.jpg",
    desc: "Многофункциональный класс техники"
  });
});

/* ПТ */
router.get('/pt', function(req, res, next) {
  res.render('tank', {
    title: "ПТ",
    picture: "images/Grille.jpg",
    desc: "Орудие у данного класса техники самое пробивное"
  });
});

module.exports = router;
