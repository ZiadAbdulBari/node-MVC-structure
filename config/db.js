const mongoose = require('mongoose');
const config = require('./config');

const dbURL = config.bd.url; 
mongoose.connect(dbURL)
.then(()=>{
    console.log('Database connected');
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})