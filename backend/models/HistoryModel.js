const mongoose = require("mongoose")

const historySchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
     },

    name:{
        type: String,
        // required: true,
    },

    email:{
        type: String,
        // required: true,
    },

    address:{
        type: String,
        // required: true,
    },

    city:{
        type: String,
        // required: true,
    },

    phone:{
        type: String,
        // required: true,
    },

    product:{
        type: String,
        required: true,
    },

    price:{
        type: String,
        required: true,
        // unique: true
    },

    total:{
        type: String,
        required: true,
    },

    quantity:{
        type: String,
        required: true,
    },
},
{
    timestamps: true
})


module.exports = mongoose.model("History", historySchema)