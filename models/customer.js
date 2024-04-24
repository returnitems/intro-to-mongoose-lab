const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
});

const customerSchema = mongoose.model('customer', schema);

module.exports = customerSchema;