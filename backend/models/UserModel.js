const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },

    lname:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
    },

    confirmPassword:{
        type: String,
        // required: true,
    }
},
{
    timestamps: true
})


module.exports = mongoose.model("Users", userSchema)