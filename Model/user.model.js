const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:String,
    pass:String,
    name:String,
    age:Number
},{
    versionKey:false
})

const User = mongoose.model('User',userSchema)

module.exports={
  User
}

