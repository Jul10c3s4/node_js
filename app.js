//para instalar o express usa-se npm install --save express
//para instalar o nodemon usa-se npm install nodemon -g
//para instalar o handlebars usa-se npm install --save express-handlebars
//para instalar o bodyparser usa-se npm install --save body-parser
//para instalar o mongoose usa-se npm install --save mongoose
//para instalar o session usa-se npm install --save express-session
//para instalar o connect-flash usa-se npm install --save connect-flash


//carregando modulos
var express = require('express')
var app = express()
const handlebars = require("express-handlebars")
const bodyparser = require('body-parser')
const path = require("path") 
const admin = require("./rotas/admin")
const session = require("express-session")
const flash = require("connect-flash")

//config  
  //template engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

  //Body Parser
  app.use(bodyparser.urlencoded({extended: true}))
  app.use(bodyparser.json())

  //mongodb
  const mongoose = require("mongoose")

  //se der erro em casa mude a versão do driver do node no mongo
  mongoose.connect("mongodb://julio:96545146@ac-djbanuf-shard-00-00.qhiu5ry.mongodb.net:27017,ac-djbanuf-shard-00-01.qhiu5ry.mongodb.net:27017,ac-djbanuf-shard-00-02.qhiu5ry.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2e8c0-shard-0&authSource=admin&retryWrites=true&w=majority", {
  }).then(() => {
    console.log("MongoDB Conectado!!!");
  }).catch((erro) => {
    console.log("erro ao se connectar ao mongoDB"+erro);
  })

//Public 
  app.use(express.static(path.join(__dirname,"public")))

// sessão
  app.use(session({
    secret: "aprendendonode",
    resave: true,
    saveUninitialized: true
  }))
  //tipo de mensagem que só aparece uma vez
  app.use(flash())

  //middleware
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
  })

//rotas
app.use('/', admin)

app.listen(8081, () => {
  console.log('Servidor execuntado na porta 8081.');
})