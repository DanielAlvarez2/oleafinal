const mongoose = require('mongoose')

const DessertFormatSchema = new mongoose.Schema({
    index:{
        type:Number,
        require:true
    },
    pageTopBottom:{
        type:Number,
        required:true
    },
    pageLeftRight:{
        type:Number,
        required:true
    },
    paddingVertical:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('DessertFormat', DessertFormatSchema)