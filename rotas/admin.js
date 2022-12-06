const express = require("express");
const router = express.Router();

const aluno = require("../models/aluno.js");

const mongoose = require("mongoose");
require("../models/aluno");
const alunos = mongoose.model("alunos");
const  alu = require("../controlers/animal")

router.get("/", function (req, res) {
  res.render("admin/pagina-inicial");
});

/*router.get('/sobre', function (req, res){
    //envia um arquivo para o navegador 
    res.sendFile(__dirname + "/html/sobre.html")
  });*/

router.get("/todos", async function (req, res) {
  /*alunos
    .find()
    .lean()
    .then((dados) => {
      res.render("admin/todos-cadastros", { dados: dados });
    })
    .catch((erro) => {
      req.flash("error_msg", "houve um erro");
      res.redirect("/");
    });*/
    res.render("admin/todos-cadastros", { dados: alu.list});
});

router.get("/todos/formulario", function (req, res) {
  //exibe o arquivo que a pessoa escolher
  res.render("admin/formulario");
});

router.post("/todos/formulario/cadastro", function (req, res) {
  //nesse código os dados tão sendo pegos do formulário e sendo renderizados para outra página html
  let nome = req.body.nome;
  let idade = req.body.idade;
  let email = req.body.email;

  var erros = [];

  if (!nome || typeof nome == undefined || nome == null || nome.length <= 2) {
    erros.push({ texto: "Nome inválido" });
  }

  if (
    !idade ||
    typeof idade == undefined ||
    idade == null ||
    idade <= 0 ||
    idade > 120
  ) {
    erros.push({ texto: "Idade inválida" });
  }

  if (!email || typeof email == undefined || email == null) {
    erros.push({ texto: "Email inválido" });
  }

  if (erros.length > 0) {
    res.render("admin/formulario", { erros: erros });
  } else {
    new alunos({
      nome: nome,
      idade: idade,
      email: email,
    })
      .save()
      .then(() => {
        req.flash("success_msg", "Aluno cadastrado!");
        console.log("Usuário criado com sucesso");
        res.redirect("/todos");
      })
      .catch((erro) => {
        req.flash("error_msg", "Erro ao salva a categoria, tente novamente!");
        console.log("ocorreu um erro: " + erro);
        console.log(aluno);
        res.redirect("/");
      });

    /*res.render('admin/cadastro', {nome: nome, idade: idade, email: email})*/
  }
});

/*router.post('/add', function (req, res){
    //req.body.titulo pega o dado dentro do html
    res.send('Dados inseridos:\n Título:'+req.body.titulo+"\n conteúdo: "+req.body.conteudo)

    //redireciona para uma página criada anteriormente 
    res.redirect('/cadastros')
  });*/

router.get("/sobre", function (req, res) {
  res.render("admin/sobre");
});

module.exports = router;
