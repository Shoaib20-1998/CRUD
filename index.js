const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {connection} = require('./Db')
const { Userroute } = require('./Route/user.routes')
const { NotesRoutes } = require('./Route/notes.route')
require('dotenv').config()
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/user',Userroute)
app.use('/notes',NotesRoutes)


app.listen(process.env.Port,async()=>{
    try {
        await mongoose.connection
        console.log("conntected to db")
    } catch (error) {
        console.log(error)
    }
  
})