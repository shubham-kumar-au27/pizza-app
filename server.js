const express = require('express');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');  //node module
const app = express();
require('dotenv').config();
const mongoose = require('mongoose') //db-connect
const session = require('express-session') //session-based authentication
const flash = require('express-flash');
const { collection } = require('./app/models/menu');
const MongoStore = require('connect-mongo')
const PORT = process.env.PORT || 3300
var bodyParser = require('body-parser');
require('body-parser-zlib')(bodyParser);

//db-connection
async function initMongoDB() {
   await mongoose.connect(process.env.MONGO_URL, (err) =>{
       if (err) {
           console.log('error in connecting DB')
       } else{
           console.log('successfully-connected-to-db')
       }
   })
}
initMongoDB()
//session-store--



//session-config--
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
      }),
    saveUninitialized: false,
    cookie: {maxAge:1000*60*60*24} //i.e. 24hrs..
}));
app.use(flash()) //middleware


//assets 
app.use(express.static('public'))

//set template engine 
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.listen(PORT, () =>{
    console.log( `listening on port ${PORT}`)
});
//importing routes
require('./routes/web')(app)














