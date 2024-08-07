const mongoose = require('mongoose')

const AfterDinnerDrinkSchema = new mongoose.Schema({
    section:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('AfterDinnerDrink', AfterDinnerDrinkSchema)