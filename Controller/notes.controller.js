const { Notes } = require('../Model/notes.model')

const GetNotes = async (req, res) => {
       //  console.log(req.body)
    try {
        let getAllnotes = await Notes.find({autherId:req.body.autherId})
        res.status(200).send(getAllnotes)
    } catch (error) {
        res.status(400).send(error)
    }

}

const PostNotes = async (req, res) => {
    try {
        let createnewnotes = new Notes(req.body)
        await createnewnotes.save()
        res.status(200).send(createnewnotes)
    } catch (error) {
        res.status(400).send(error)
    }

}

const UpdateNotes = async (req, res) => {
    // 644b8fd6a4fe2b6b376c3788   arshi auth
    // 644b44186b19272cf424d4bf gaytri auth

    /*
     {
    "_id": "644b8e3da4fe2b6b376c3781",
    "title": "javascript",
    "auther": "gayatri",
    "body": "javascript is very loose language",
    "category": "NE",
    "autherId": "644b44186b19272cf424d4bf"
  }

    */ 
    const {id} = req.params
    let newnote = await Notes.findOne({_id:id})
    // console.log(newnote.autherId,req.body.autherId)

    console.log(newnote.autherId==req.body.autherId)
     try {       
        if(req.body.autherId===newnote.autherId) {
            const updateNote = await Notes.findByIdAndUpdate({ _id:id }, req.body,{new:true})
            res.status(200).send(updateNote)           
        } else {        
            res.status(200).send("You are Not Authorised") 
        }
     } catch (error) {
         res.status(400).send("error")
   }
}

const DeleteNotes = async(req, res) => {
    const { id } = req.params
    try {
        let Note = await Notes.findOne({ _id: id })
        if (req.body.autherId != Note.autherId) {
            res.status(200).send("You are Not Authorised")
        } else {
            await Notes.findByIdAndDelete({ _id: id })
            res.status(200).send("note deleted")
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    GetNotes, PostNotes, UpdateNotes, DeleteNotes
}