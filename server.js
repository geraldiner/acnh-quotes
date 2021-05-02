const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000

let db,
  dbConnectionStr = process.env.DB_URI,
  dbName = 'acnh-quotes'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName)
  })
  .catch(error => console.error(error))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
  db.collection('quotes').find().toArray()
    .then(results => {
      response.render('index.ejs', { quote: results[Math.floor(Math.random() * results.length)] })
    })
    .catch(error => console.error(error))
})

app.post('/quotes', (request, response) => {
  db.collection('quotes').insertOne({
    quote: request.body.quote,
    source: 'Pascal'
  })
    .then(result => {
      console.log('Quote Added')
      response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
