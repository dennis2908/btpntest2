const route = require('express').Router()
const LibraryController = require('../controllers/libraryController')

route.get('/', LibraryController.booksList)

module.exports = route