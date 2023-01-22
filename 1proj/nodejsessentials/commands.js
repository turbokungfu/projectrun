const arguments = process.argv.slice(2);
const sum = arguments.reduce((a,b)=> a+parseInt(b), 0)

console.log(sum)