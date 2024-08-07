const mongoose = require('mongoose')

const DinnerFormatSchema = new mongoose.Schema({
    pagePadding: {
        type: Number,
        required: true
    },
    paddingVertical: {
        type: Number,
        required: true
    },
    paddingHorizontal: {
        type: Number,
        required: true
    },
    index:{
        type: Number,
        required: true
    }    
})

module.exports = mongoose.model('DinnerFormat', DinnerFormatSchema)