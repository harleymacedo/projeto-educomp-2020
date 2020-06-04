const express = require('express')
const app = express()
const handleBars = require('express-handlebars')

//view engine
app.engine('handlebars', handleBars({defaultLayout: 'main'}))

//set
app.set('view engine', 'handlebars')

//use
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {res.render('home')})

app.listen(3001)