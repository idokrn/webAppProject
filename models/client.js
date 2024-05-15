const mongoose = require('mongoose');
const cart = require('./cart');

const Schema = mongoose.Schema;

const Client = new Schema({
    Name : {
        type: String,
        required: true
    },
    Address : {
        type: String,
        require: true
    },
    Cart: {
        type: cart,
        require: false,
    },
});

module.exports = mongoose.model('Client', Client);