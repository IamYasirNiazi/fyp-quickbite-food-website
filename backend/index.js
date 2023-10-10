const express = require("express")
const connectDB = require("./config/connectDB")
const dotenv = require("dotenv").config()
const errorHandler = require("./middleware/errorHandler")
const cors = require("cors")

connectDB()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

app.use(errorHandler)


app.use("/api/user", require('./routes/UserRoutes'))
app.use("/api/admin", require('./routes/AdminRoutes'))


app.listen(PORT, ()=>{
    console.log(`Backend running at ${PORT}`)
})

