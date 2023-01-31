import  express  from "express";
const app = express()

import router  from './routes/User.js'
app.use('/user', router)

app.listen(3000, ()=> {
    console.log('app is listening on port 3000')
})