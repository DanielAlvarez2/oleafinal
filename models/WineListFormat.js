mongoose = require('mongoose')

const WineListFormatSchema = new mongoose.Schema({
    padding:{
        type: Number,
        required:true
    },
    index:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('WineListFormat', WineListFormatSchema)