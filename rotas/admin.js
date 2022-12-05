const express = require("express")
const router = express.Router()

router.get('/', function (req, res){
    res.render("pagina-inicial");
});

router.get('/sobre', function (req, res){
    //envia um arquivo para o navegador 
    res.sendFile(__dirname + "/html/sobre.html")
  });
  
  router.get('/cad', function (req, res){
    //exibe o arquivo que a pessoa escolher
    res.render('formulario')
  });
  
  router.post('/add', function (req, res){
    //req.body.titulo pega o dado dentro do html
    res.send('Dados inseridos:\n Título:'+req.body.titulo+"\n conteúdo: "+req.body.conteudo)
    res.redirect('/cadastros')
  });
  router.post('/home', function (req, res){
    let Nome =  req.body.nome
    res.render('home', {nome: Nome, sobrenome: req.body.sobrenome})
  });

module.exports = router