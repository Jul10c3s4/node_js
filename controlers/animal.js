const aluno = require("../models/aluno.js")

exports.list = async (req, res) => {
    await aluno.find({}).exec(function(err, docs) {
        res.render("admin/todos-cadastros", { dados : docs});
    });
}