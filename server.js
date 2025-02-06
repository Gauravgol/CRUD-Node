import express from 'express'
import connectDB from './src/Db/db.js'
import { configDotenv } from 'dotenv'
configDotenv({ path: '.env' })
import router from './src/Router/router.js'

// connectDB()

const app = express()
const PORT = process.env.PORT


app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})