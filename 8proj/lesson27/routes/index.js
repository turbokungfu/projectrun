var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'hello' });
});

router.get('/add-post', function(req, res, next) {
  res.render('add-post', { title: 'hello' });
});

module.exports = router;
