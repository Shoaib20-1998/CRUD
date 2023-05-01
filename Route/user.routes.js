const express = require('express')
const { CreateUser,Loginuser} = require('../Controller/user.controller')
const{Auth}=require('../Middleware/Auth')
const Userroute = express.Router()

Userroute.post('/register',CreateUser)
Userroute.post('/login',Loginuser)


module.exports={
    Userroute
}