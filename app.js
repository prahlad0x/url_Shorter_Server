const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { dataBaseConnection } = require("./databases/DB")
const {authRouter} = require('./routes/auth')
const dotenv = require("dotenv")
const { urlRouter } = require("./routes/url")
dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/', async(req, res)=>{
    res.send({Message : 
    "HomePage"})
})

app.use("/api/auth", authRouter)
app.use("/", urlRouter)

app.listen(process.env.Port, async()=>{
   try {
    await dataBaseConnection
    console.log("-- connected to database --")
   } catch (error) {
    console.log(error)
   }
   console.log("-- server is running --")
})