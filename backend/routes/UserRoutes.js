const express = require("express")
const router = express.Router()
const {registerUser, loginUser, currentUser, forgetPass} = require("../controllers/UserController")
const validateToken = require("../middleware/validateToken")


    router.post('/register', registerUser)

    router.post('/login', loginUser)

    router.post('/forget-pass', forgetPass)

    router.get('/current', validateToken , currentUser)

    
module.exports = router