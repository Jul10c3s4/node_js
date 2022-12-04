//para instalar o nodemon usa-se npm install nodemon -g
//para instalar o handlebars usa-se npm install --save express-handlebars
//para instalar o bodyparser usa-se npm install --save body-parser
var express = require('express')
var app = express()
const handlebars = require("express-handlebars")
const bodyparser = require('body-parser')

//config  
  //template engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

  //Body Parser
  app.use(bodyparser.urlencoded({extended: false}))
  app.use(bodyparser.json())
var mongoClient = require('mongodb').MongoClient

/*mongoClient.connect('mongodb+srv://firstDatabase:j11u22l33@cluster0.qhiu5ry.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true}).then((err, client) => {
  let db = client.db('pweb')
  
  db.collection('animais').find().toArray((err, result) =>{
    console.log(result);
  });
})*/
app.get('/', function (req, res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function (req, res){
  //envia um arquivo para o navegador 
  res.sendFile(__dirname + "/html/sobre.html")
});

app.get('/cad', function (req, res){
  //exibe o arquivo que a pessoa escolher
  res.render('formulario')
});

app.post('/add', function (req, res){
  //req.body.titulo pega o dado dentro do html
  /*res.send('Dados inseridos:\n Título:'+req.body.titulo+"\n conteúdo: "+req.body.conteudo)*/
  res.redirect('/home')
});
app.post('/home', function (req, res){
  let Nome =  req.body.nome
  res.render('home', {nome: Nome, sobrenome: req.body.sobrenome})
});


app.listen(8081, function(){
  console.log('Servidor execuntado na porta 8081.');
})