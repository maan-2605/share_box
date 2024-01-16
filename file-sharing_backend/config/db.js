require('dotenv').config();
const { config } = require('dotenv');
const mongoose = require('mongoose');


function connectDB(){

    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected');
    });
    connection.on("error",(error) => {
        console.log('Connection failed');
    });
}

module.exports = connectDB;