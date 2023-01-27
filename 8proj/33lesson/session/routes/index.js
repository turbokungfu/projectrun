var express = require('express');
var router = express.Router();
let viewCount =  1;
let title = "hellow"

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.title = title.split('').reverse().join('');
  req.session.viewCount += 1;
  res.render('index', { viewCount: req.session.viewCount, title: req.session.title });
});

module.exports = router;
