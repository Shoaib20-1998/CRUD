const { User } = require('../Model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const CreateUser = async (req, res) => {
    const { email, name, pass, age } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            let Newuser = new User({ email, name, pass: hash, age })
            await Newuser.save()
            res.status(200).send({"msg":"New User created"})
        });
    } catch (error) {
        res.status(400).send(error)
    }

}


const Loginuser = async (req, res) => {
    const { email, pass } = req.body
    console.log(pass)
    try {
        let Newuser = await User.find({ email })
        bcrypt.compare(pass, Newuser[0].pass, async (err, result) => {
            if (result) {
                const token = jwt.sign({ autherId:Newuser[0]._id, autherName:Newuser[0].name}, 'masai');
                res.status(200).send({ "msg": "success", "token": token })
            }
            else {
                res.status(200).send("wrong credential")
            }
        });

    } catch (error) {
        res.status(400).send(error)
    }

}


module.exports = {
    CreateUser,
    Loginuser,
}