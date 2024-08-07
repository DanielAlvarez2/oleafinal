const mongoose = require('mongoose')

const DessertBackFormatSchema = new mongoose.Schema({
    index:{
        type:Number,
        require:true
    },
    pageTop:{
        type:Number,
        required:true
    },
    pageLeftRight:{
        type:Number,
        required:true
    },
    verticalMargin:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('DessertBackFormat', DessertBackFormatSchema)