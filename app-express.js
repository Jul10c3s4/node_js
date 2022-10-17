var express = require('express')

var app = express()

var mongoClient = require('mongodb').MongoClient

mongoClient.connect('mongodb+srv://firstDatabase:j11u22l33@cluster0.qhiu5ry.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true}).then((err, client) => {
  let db = client.db('pweb')
  
  db.collection('animais').find().toArray((err, result) =>{
    console.log(result);
  });
})
app.get('/', function (req, res){
  res.send('olá, turma 913');
});

app.listen(3000, function(){
  console.log('App execuntado na porta 3000.');
})