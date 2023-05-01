
const jwt = require('jsonwebtoken');

const Auth =(req,res,next)=>{
    const token = req.headers.token
    if(token){ 
            jwt.verify(token.split(" ")[1], 'masai', async (err, decoded) => {
                if (decoded) {
                    req.body.autherId=decoded.autherId
                    req.body.auther=decoded.autherName
                    next()
                } else {
                    res.status(400).send("You are not logged in login first")
                }
            })                  
    }else{
        res.status(400).json({"err":"Token is Not Passed"})

    }
   

}

module.exports={
    Auth
}