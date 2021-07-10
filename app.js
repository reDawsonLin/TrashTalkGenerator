// require relates modules used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const trashTalkGenerator = require('./trash_talk_generator.js')
const list = require('./index.json')

// setting template engine in the express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('static'))
// use body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { targets: list.target })
})

app.post('/', (req, res) => {
  const trashTalk = trashTalkGenerator(req.body.target)
  res.render('index', { targets: list.target, trashTalk: trashTalk, target: req.body.target })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})