const asyncHandler = require("express-async-handler")
const Order = require("../models/HistoryModel")



const makeOrder = asyncHandler( async (req, res)=>{

    const { name, email, address, city, phone, product, quantity, price, total } = req.body

    if( !name || !email || !address || !city || !phone || !product || !quantity || !price || !total){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const user = await Order.create({
        name, email, address, city, phone, product, quantity, price, total, user: req.user.id
    })

    res.status(201).send(`Order created Successfully. Order ID is ${user._id}`)

    if(!user){
        res.send(400)
        throw new Error("Order is not created. Please try again later.")
    }


    // res.send(`Register the User`)
    console.log("Register the User")
})



const history = asyncHandler( async (req, res)=>{

    const { user } = req.body;

    if(!user){
        res.status(400)
        throw new Error("User Id required")
    }

    const historyDB = await Order.find({user})
    res.status(200).send(historyDB)

    // if(id!==historyDB){
    //     res.status(400)
    //     throw new Error("No History Found.")
    
    // }else{
    
    //     res.status(200).send(historyDB);
    //     console.log("Showing History");
    // }

    // res.status(201).send(`Order created Successfully. Order ID is ${user._id}`)

    // if(!history){
    //     res.send(400)
    //     throw new Error("No History Found.")
    // }


    // res.send(`Register the User`)
    // console.log("History controller running.")
})





module.exports = {makeOrder, history}
