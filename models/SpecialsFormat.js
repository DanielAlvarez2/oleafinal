const mongoose = require('mongoose')

const SpecialsFormatSchema = new mongoose.Schema({
    showLegalText:{
        type: Boolean,
        required: true
    },
    pagePadding: {
        type: Number,
        required: true
    },
    itemMargin: {
        type: Number,
        required: true
    },
    index:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('SpecialsFormat', SpecialsFormatSchema)