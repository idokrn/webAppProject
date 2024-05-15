const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    Name : {
        type: String,
        required: true
    },
    Type : {
        type: String,
        require: true
    },
    Brand : {
        type: String,
        require: true
    },
    Supplier: { // hidden from user
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model('Product', Product);