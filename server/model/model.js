const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    categoryid : {
        type : Number,
        required: true
    },
    productid : {
        type: Number,
        required: true,
        unique: true
    },
    categoryName : {
        type: String,
        required: true,
        unique: true
    },
    productName : {
        type: String,
        required: true,
        unique: true
    },
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;