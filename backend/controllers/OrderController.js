const asyncHandler = require("express-async-handler")
const Order = require("../models/HistoryModel")


const makeOrder = asyncHandler( async (req, res)=>{

    const { name, email, address, city, phone, product, quantity, price, total } = req.body

    if( !name || !email || !address || !city || !phone || !product || !quantity || !price || !total){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const user = await Order.create({
        name, email, address, city, phone, product, quantity, price, total
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

    const { id } = req.body

    if( !id){
        res.status(400)
        throw new Error("Please Login First")
    }

    const history = await Order.findOne({_id})

    // res.status(201).send(`Order created Successfully. Order ID is ${user._id}`)

    if(!history){
        res.send(400)
        throw new Error("No History Found.")
    }


    // res.send(`Register the User`)
    console.log("History controller running.")
})


module.exports = {makeOrder, history}
