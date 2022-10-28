import express from 'express';
import cors from 'cors'
import { limiter } from './src/config';

const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter)
app.use('', require('./src/routes/dob'))



const PORT = process.env.PORT || 3301

app.listen(PORT, async() => {
    console.log(`Server listening on port ${PORT}`)
})
