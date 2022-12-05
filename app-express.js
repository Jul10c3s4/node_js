//para instalar o express usa-se npm install --save express
//para instalar o nodemon usa-se npm install nodemon -g
//para instalar o handlebars usa-se npm install --save express-handlebars
//para instalar o bodyparser usa-se npm install --save body-parser
//para instalar o mongoose usa-se npm install --save mongoose


//carregando modulos
var express = require('express')
var app = express()
const handlebars = require("express-handlebars")
const bodyparser = require('body-parser')
const admin = require("./rotas/admin")

//config  
  //template engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

  //Body Parser
  app.use(bodyparser.urlencoded({extended: true}))
  app.use(bodyparser.json())

  //mongodb
  /*const mongoose = require("mongoose")

  //se der erro em casa mude a versão do driver do node no mongo
  mongoose.connect("mongodb+srv://julio:96545146@cluster0.qhiu5ry.mongodb.net/?retryWrites=true&w=majority", {
  }).then(() => {
    console.log("MongoDB Conectado!!!");
  }).catch((erro) => {
    console.log("erro ao se connectar ao mongoDB"+erro);
  })*/

//rotas
app.use('/admin', admin)

app.listen(8081, () => {
  console.log('Servidor execuntado na porta 8081.');
})