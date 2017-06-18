console.log('May Node be with you')
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('', (err, database) => {

})


app.use(bodyparser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on port 3000')
})

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.sendFile(__dirname+'/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})
