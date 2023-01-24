const config = require('./config')  
const chalk = require('chalk')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(config.databaseName)

db.serialize(() => {
    const stmt =`SELECT title, date, author, post FROM ${config.tableName} `;
    db.each(stmt, (err, row) => {
        if (err){
            console.log(chalk.red('problem reading row data'))
        }else{
            const {title, date, author, post } = row;
            console.log(chalk.red(title))
            console.log(chalk.blue(date))
            console.log(chalk.yellow(author))
            console.log(chalk.magenta(post))
        }
    })
    db.close();
})
