const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price should not be lower than {VALUE}']
    },
    stock: {
        type: Number,
        required: true,
        min: [1, 'You need to have at least 1 item to sell']
    }
});

module.exports = mongoose.model('Item', itemSchema);
