const express = require("express")
const router = express.Router()
const {registerUser, loginUser, currentUser, forgetPass} = require("../controllers/UserController")
const {makeOrder, history} = require("../controllers/OrderController")
const validateToken = require("../middleware/validateToken")


    router.post('/register', registerUser)
    
    router.post('/login', loginUser)
    
    router.post('/forget-pass', forgetPass)
    
    router.get('/current', validateToken , currentUser)
    
    router.post('/make-order', makeOrder)

    router.get('/history', history)
    
module.exports = router