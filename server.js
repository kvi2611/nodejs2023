import * as dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
import { userRouter, studentRouter } from './routes/index.js'

app.use("/users", userRouter)
app.use("/students", studentRouter)

app.get("/", async (req, res) => {
    res.send('hello world')
})

app.listen(port, async () => {
    console.log(`App running on port ${port}`)
})