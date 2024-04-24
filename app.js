const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const customer = require('./models/customer.js');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected');
    await mongoose.disconnect();
}

connect();
