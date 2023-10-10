const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")


const validateToken = asyncHandler( async (req, res, next)=>{
    let token
    const authToken = req.headers.Authorization || req.headers.authorization

    if(authToken && authToken.startsWith("Bearer")){
        token = authToken.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_AUTH_TOKEN, (err, decoded)=>{

            if(err){
                res.status(401)
                throw new Error("Authorization Failed")
            }

            req.user = decoded.user
            next()
        })

        if(!token){
            res.status(401)
            throw new Error("User is not authorized")
        }
    }

})

module.exports = validateToken