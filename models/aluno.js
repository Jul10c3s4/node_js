const mongoose = require("mongoose")

  //se der erro em casa mude a versão do driver do node no mongo
  mongoose.connect("mongodb+srv://julio:96545146@cluster0.qhiu5ry.mongodb.net/?retryWrites=true&w=majority", {
  }).then(() => {
    console.log("MongoDB Conectado!!!");
  }).catch((erro) => {
    console.log("erro ao se connectar ao mongoDB"+erro);
  })

//definindo o model
const AlunosSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true   
    },

    idade: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    }
})

//nomeando a collection
mongoose.model('alunos', AlunosSchema)

const aluno = mongoose.model('alunos')

//criação de model

/*new aluno({
    nome: "anne",
    idade: 18,
    email: "anne@gmail.com"

}).save().then(() => {
    console.log("Usuário criado com sucesso");
}).catch((erro) => {
    console.log("ocorreu um erro: " + erro);
})*/

/*
await let dados = aluno.find()
console.log(dados);*/