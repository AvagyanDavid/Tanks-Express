var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World of Tanks' });
});

router.get('/heavy_tank', function(req, res, next) {
  res.send("<h1>Страница Тяжелые танки </h1>");
});

router.get('/average_tank', function(req, res, next) {
  res.send("<h1>Страница Средние танки </h1>");
});

router.get('/pt', function(req, res, next) {
  res.send("<h1>Страница ПТ </h1>");
});


module.exports = router;
