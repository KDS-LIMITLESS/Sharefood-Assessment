import express from 'express';
import cors from 'cors'
import { limiter } from './src/config';

const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter)
app.use('/api', require('./src/routes/dob'))



const PORT = 3000 || process.env.PORT 

app.listen(PORT, async() => {
    console.log(`Server listening on port ${PORT}`)
})
