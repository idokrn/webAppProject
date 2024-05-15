const mongoose = require('mongoose');
const product = require('./product');

const Schema = mongoose.Schema;

const Supplier = new Schema({
    Name : {
        type: String,
        required: true
    },
    Products : {
        type: [product],
        require: true,
    },
    Address : {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('Supplier', Supplier);