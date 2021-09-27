const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()

// // Map global promise - get rird of warning
// mongoose.Promise = global.Promise

// Connect to mongoose
mongoose
  .connect('mongodb://localhost:27017/vidjot-dev')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// Handlebars Middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome'
  res.render('index', {
    title
  })
})

// About Route
app.get('/about', (req, res) => {
  res.render('about')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server is started on port ${port}`)
})
