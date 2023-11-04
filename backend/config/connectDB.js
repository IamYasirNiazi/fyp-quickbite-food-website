const mongoose = require('mongoose');

// const DB = process.env.MONGO_URI

const connectDB = async ()=>{

    try {
        // await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect("mongodb://0.0.0.0:27017/quickbite");
        await mongoose.connect("mongodb+srv://iamyasirniazi:Niazi404223@cluster0.k4xujf9.mongodb.net/quickbite");
        console.log("DB Connected Successfully")
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = connectDB