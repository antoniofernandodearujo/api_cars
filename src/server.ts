import express from "express"
import router from "./routes/Routes"
import mongoose from "mongoose"

const app = express()

const url = "mongodb://127.0.0.1:27017/api"
mongoose.connect(url)

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log('API ONLINE');
})