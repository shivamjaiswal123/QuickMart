import express from 'express'
import dotenv from 'dotenv'
import cookie from 'cookie-parser'


import connectDB from './config/db.js'
import userRouter from './routes/user.routes.js'

dotenv.config()
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cookie());

app.use('/api/v1/user', userRouter)



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is up and running on ${port}`)
    })
})