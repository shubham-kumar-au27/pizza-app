
const authControllers = require('../app/http/controllers/authControllers')
const homeController= require('../app/http/controllers/homeController')
const cartController= require('../app/http/controllers/customers/cartController')

function initRoutes(app){
    
    app.get('/',homeController().index)
    app.get('/cart',cartController().index)
    app.get('/login',authControllers().login)
    app.get('/register',authControllers().register)
   
}

module.exports=initRoutes