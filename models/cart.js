const mongoose = require('mongoose');
const product = require('./product');

const Schema = mongoose.Schema;

const Cart = new Schema({
    Size : {
        type: Number,
        required: true
    },
    Products: {
        type: [product],
    },
    TotalPrice: {
        type: Number,
        require: true,
    },
    Purchased: {
        type: Date
    },
    ClientId: {     // Mongo Generate Id for client
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('Cart', Cart);