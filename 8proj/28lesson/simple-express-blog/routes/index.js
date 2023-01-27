var express = require('express');
var router = express.Router();
const config = require('../config')
const chalk = require('chalk')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(config.dataBaseName)


/* GET home page. */
router.get('/', function(req, res, next) {
  const success = req.query.submitted;
  res.render('index', { title: 'simple express blog', success: success });
});


router.post('/add-post', function(req, res, next) {
  console.log('noghitn is happening')
  const {title,author,content} = req.body;
  const date = new Date().toISOString();
  const stmt = `INSERT INTO ${config.tableName} (title, date, author, post)
  VALUES ("${title}", "${date}", "${author}", "${content}")`;
  db.serialize(()=> {
    db.run(stmt);
    res.redirect('/')
    console.log(chalk.green('new Post added to Database'))
  })
  db.close()
});

router.get('/view-posts', (req, res, next)=> {
  const stmt = `SELECT title, date, author, post FROM ${config.tableName}`
  db.serialize(()=> {
    db.all(stmt, (err, rows)=>{
      if (err) {
        console.log(chalk.red('problem reading rwo data'))
      } else {
        res.render('view-posts', {posts: rows})
      }
    })
  })
})

module.exports = router;
