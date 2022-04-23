const express = require('express');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');  //node module
const app = express();

const PORT = process.env.PORT || 3300

//assets 
app.use(express.static('public'))

//set template engine 
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.listen(PORT, () =>{
    console.log( `listening on port ${PORT}`)
});

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})



