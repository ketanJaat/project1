const mongoose = require('mongoose');

//seed the .env file the process file to use here
require('dotenv').config();

const db_Connect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('connect between database and server'))
    .catch((error) => {
        console.log('connection failed with databse');
        console.error(error.message);
        //terminate the node.js process with an errror
        process.exit(1);
    })
}

module.exports = db_Connect