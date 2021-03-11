const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/MeetUp'; //localhost mongodb connection


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log('db connected successfully');
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));