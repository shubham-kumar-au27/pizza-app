const express=require('express')
const app=express()

const ejs=require('ejs')
const path=require('path')
const expressLayout=require('express-ejs-layouts')

const PORT=process.env.PORT || 2400



//Assets
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})


//set template engine
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')




app.listen(PORT,()=>{
    console.log(`Hello from the server PORT ${PORT}`)
})