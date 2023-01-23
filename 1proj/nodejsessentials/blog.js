const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const file = 'myblog.txt';
const author = process.argv[2] || 'unknown';
const title = process.argv[3] || 'new blog post';

rl.question('Enter your blog post:', (postContent)=>{
    const blogEntry = 
`
 ${'-'.repeat(title.length)}
 ${title}
 ${'-'.repeat(title.length)}
 By ${author} on ${new Date()}

${postContent}`

fs.appendFile(file, blogEntry, (err) => {
    if(err){
        console.log('there was an error in your blog post')
        throw err
    }
    console.log('th blog was written successfully')
})
rl.close()
})