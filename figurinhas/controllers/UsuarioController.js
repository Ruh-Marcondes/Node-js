const bcrypt  = require("bcryptjs");
const jwt =  require('jsonwebtoken');

const Usuario = require('../model/Usuario')
const Utilidades = require('../util/Utilidades');

exports.create = (req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha  = req.body.senha;

    if(nome === undefined || email === undefined || senha === undefined){
        res.status(400).json({
            mensagem:'campos não definidos'
        })
    }else{
        bcrypt.hash(senha,10)
        .then(senhaCriptografada =>{
            Usuario.findOne({
                
            })
        })
    }
}