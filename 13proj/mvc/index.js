import express  from 'express'
import dotenv from 'dotenv'
import { router as trainRoute } from './routes/route.js';

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.set('view engine', 'hbs');

app.use('/train', trainRoute)

app.use('/', (req,res)=>{
    res.send('Hello World')
})



app.listen(PORT, (req, res)=>{
    console.log(`server is listening on ${PORT}`)
}
)