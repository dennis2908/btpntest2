const {User, Book} = require('../models')
const {compare} = require('../helpers/bcrypt')

class Controller {
  static opening(req,res){
    res.render('index')
  }
  
  static contact(req,res){
    res.render('contact')
  }
  
  static about_us(req,res){
    res.render('about-us')
  }

  static login(req,res){
    let error
    if (req.query.error){
      if (req.query.error.includes(',')) {
        error = req.query.error.replace(/\n/gi, '').split(',')
      } else {
        error = [req.query.error]
      }
    } 
    res.render('login', {error})
  }

  static loginIn(req,res){
    let obj = {
      username : req.body.username === '' ? null : req.body.username,
      password : req.body.password === '' ? null : req.body.password
    }
    console.log(obj);
    User.findOne({where: {username : obj.username}})
     .then(data => {
       if (data) {
         if (compare(obj.password, data.password)) {
           req.session.name = data.username
           res.redirect('/home')
         } else {
          let err = new Error('Username/Password is wrong')
          res.redirect(`/login?error=${err.message}`)
         }
       } else {
         let err = new Error(`We can't find your account`)
         res.redirect(`/login?error=${err.message}`)
       }
     })
     .catch(err => {
      res.redirect(`/login?error=${err.message}`)
    })
  }
  
  static register(req,res){
    let error
    if (req.query.error){
      if (req.query.error.includes(',')) {
        error = req.query.error.replace(/\n/gi, '').split(',')
      } else {
        error = [req.query.error]
      }
    } 
    res.render('register', {error})
  }

  static registerIn(req,res){
    let obj = {
      first_name : req.body.first_name === '' ? null : req.body.first_name,
      last_name : req.body.last_name,
      username : req.body.username === '' ? null : req.body.username,
      password : req.body.password === '' ? null : req.body.password
    }
    User.create(obj)
     .then(() => {
       res.redirect('/')
     })
     .catch(err => {
       res.redirect(`/register?error=${err.message}`)
     })
  }

}

module.exports = Controller
