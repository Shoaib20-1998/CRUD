const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
  title:String,    
  auther:String,
  body:String,    
  category:String,
  autherId:String    
},{
    versionKey:false
})

const Notes = mongoose.model('note',NotesSchema)

module.exports={
    Notes
}