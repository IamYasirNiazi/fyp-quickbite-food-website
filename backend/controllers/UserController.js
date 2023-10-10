const asyncHandler = require("express-async-handler")
const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registerUser = asyncHandler( async (req, res)=>{

    const { fname, lname, email, password } = req.body

    if( !fname || !lname || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(400)
        throw new Error("This user already exists")
    }
    
    // const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        fname,
        lname,
        email,
        // password: hashedPassword
        password
    })

    res.status(201)
    res.send(`User created Successfully. User Email is ${user.email}`)

    if(!user){
        res.send(400)
        throw new Error("User is not created. Please try again later.")
    }


    // res.send(`Register the User`)
    // console.log("Register the User")
})



const loginUser = asyncHandler( async (req, res)=>{

    const { email, password } = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email})

    // if(!userAvailable || !(await bcrypt.compare(password, userAvailable.password)) ){
    if(!userAvailable || !(userAvailable.password === password) ){
        res.status(400)
        throw new Error("Email or Password is wrong.")
    }else{

        let authToken = jwt.sign({
            user:{
                id: userAvailable.id,
                email: userAvailable.email,
                name: userAvailable.fname
            }
        },
        process.env.JWT_SECRET_AUTH_TOKEN,
        {expiresIn: "30m"})
        
        res.status(200).json(authToken)
        // localStorage.setItem('token', authToken)
        console.log(authToken)
    }


    // res.send("Login the User")
    // console.log("Login the User")
})



const forgetPass = asyncHandler( async (req, res)=>{

    const { email, password, confirmPassword } = req.body

    if(!email || !password || !confirmPassword){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email})

    // if(!userAvailable || !(await bcrypt.compare(password, userAvailable.password)) ){
    if(!userAvailable){
        res.status(400)
        throw new Error("This User doesn't exist. Please enter correct email.")
    }else if(password!==confirmPassword){
        res.status(400)
        throw new Error("Both Passoword & Confirm Password should match.")   
    }else{

        const updatedUser = await User.findOneAndUpdate(
                    { email: email },
                    { password: password },
                    { new: true }
                );

                if (updatedUser) {
                    console.log('User updated successfully:', updatedUser);
                } else {
                    console.log('User not found');
                }
    }
})



const currentUser = asyncHandler( async (req, res)=>{
    res.send(req.user)
    console.log(req.user)
    // res.send("Getting User info")
})



module.exports = {registerUser, loginUser, currentUser, forgetPass}
