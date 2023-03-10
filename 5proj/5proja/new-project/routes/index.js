var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ejs', (req, res, next)=> {
  res.render('ejs-example', {
    title: '<h1> Example of ejs template</h1>',
    showTitle: true,
    data: ['apples', 'oranges', 'pears', 'kiwi']
  })
})

module.exports = router;
