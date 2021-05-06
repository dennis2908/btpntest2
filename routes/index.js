const route = require('express').Router()
const Controller = require('../controllers/controller')
const libraryRoutes = require('./library')
const userRoutes = require('./user')

route.use('/library', libraryRoutes)
route.use('/user', userRoutes)
route.get('/', Controller.opening)
route.get('/about-us', Controller.about_us)
route.get('/contact', Controller.contact)
route.get('/login', Controller.login)
route.post('/login', Controller.loginIn)
route.get('/register', Controller.register)
route.post('/register', Controller.registerIn)

module.exports = route