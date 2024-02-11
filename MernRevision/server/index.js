const express = require('express')
const app = express()
const cors = require('cors')
const  route  = require('./route/route')
require('dotenv').config()
const connectedToDB = require('./config/mongoDb')
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/route' , route)

const startConnection = async () => {
    try{
        await connectedToDB(process.env.mongoDBUrl)
        app.listen(3003, () => console.log('server is live in port 3003'))
    }
    catch(err){
        console.log('error')
    }
}
startConnection()

