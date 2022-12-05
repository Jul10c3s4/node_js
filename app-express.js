//para instalar o nodemon usa-se npm install nodemon -g
//para instalar o handlebars usa-se npm install --save express-handlebars
//para instalar o bodyparser usa-se npm install --save body-parser
//para instalar o mongoose usa-se npm install --save mongoose


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

  //mongodb
  const mongoose = require("mongoose")

  //se der erro em casa mude a versão do driver do node no mongo
  mongoose.connect("mongodb+srv://julio:96545146@cluster0.qhiu5ry.mongodb.net/?retryWrites=true&w=majority", {
  }).then(() => {
    console.log("MongoDB Conectado!!!");
  }).catch((erro) => {
    console.log("erro ao se connectar ao mongoDB"+erro);
  })
  ssds

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
  res.send('Dados inseridos:\n Título:'+req.body.titulo+"\n conteúdo: "+req.body.conteudo)
  res.redirect('/home')
});
app.post('/home', function (req, res){
  let Nome =  req.body.nome
  res.render('home', {nome: Nome, sobrenome: req.body.sobrenome})
});


app.listen(8081, function(){
  console.log('Servidor execuntado na porta 8081.');
})