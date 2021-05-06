const {User, Book} = require('../models')

class LibraryController {
  static booksList(req,res){
    Book.findAll({order:[['title', 'ASC']]})
     .then(data => {
       res.render('booksList', {data})
     })
     .catch(err => {
       res.send(err.message)
     })
  }
}

module.exports = LibraryController