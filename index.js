import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import postRouter from './routes/postRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

//route
app.use('/api/v1/', postRouter)

//connect database
connectDB();


//port
const port = process.env.port

//server
app.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`)
})