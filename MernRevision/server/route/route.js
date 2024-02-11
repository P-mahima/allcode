
const route = require('express').Router()
const { Registeruser, LoginUset } = require('../controller/loginMongo')
const { register, login } = require('../controller/loginR')

route.post('/register' , register)
route.post('/login' , login)

route.post('/registeruser' , Registeruser)
route.post('/loginuser' , LoginUset)

module.exports = route