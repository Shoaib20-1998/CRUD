const express = require('express')
const { GetNotes, PostNotes, UpdateNotes, DeleteNotes } = require('../Controller/notes.controller')
const{Auth}=require('../Middleware/Auth')
const NotesRoutes = express.Router()

NotesRoutes.get('/getnotes',Auth,GetNotes)
NotesRoutes.post('/createnotes',Auth,PostNotes)
NotesRoutes.patch('/updatenotes/:id',Auth,UpdateNotes)
NotesRoutes.delete('/deletenotes/:id',Auth,DeleteNotes)

module.exports={
    NotesRoutes
}