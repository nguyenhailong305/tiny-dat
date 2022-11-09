const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    title : String,
    content : String,
    img : Array
})

module.exports = mongoose.model('jqk' , ItemSchema)