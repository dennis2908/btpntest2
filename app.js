const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')
const session = require('express-session')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))
app.use(session({
  secret: 'library key',
  resave: false,
  saveUninitialized: true
}))
app.use('/', route)
app.listen(port, ()=>{
  console.log(`your app is listening in http://localhost:${port}`);
})