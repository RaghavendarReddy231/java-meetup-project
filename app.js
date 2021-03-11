const express = require('express');
const mailer = require('express-mailer');
const db = require('./database/db');
const bodyParser = require('body-parser');
// const cors = require('cors');

const config = require('./config');

console.log(config)

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const UserRouter = require('./routes/UserRouter');
const MeetUpRouter = require('./routes/MeetUp');

mailer.extend(app, {
    from: config.email.MAIL_FROM_ADDRESS,
    host: config.email.MAIL_HOST,
    secureConnection: config.email.MAIL_SECURECONNECTION,
    port: config.email.MAIL_PORT,
    transportMethod: config.email.MAIL_DRIVER,
    auth: {
      user: config.email.MAIL_USERNAME,
      pass: config.email.MAIL_PASSWORD
    }
});


app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use('/user', UserRouter)
app.use('/meet-up', MeetUpRouter)


app.listen(config.web.port, function(res){
    console.log(`connected successfully port ${config.web.port}`)
});