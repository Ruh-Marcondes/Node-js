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

exports.update = (req,res,next) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha  = req.body.senha;


}

exports.getAll = (req,res,next) =>{
    Usuario.findAll({
        order:[
            ['nome','ASC']
        ],
        attributes:['id','nome','email']
    }).then(usuarios =>{
        res.status(200).json({
            mensagem:'Usuario não encontrado'
        });
    }).catch();
    
}

exports.getOne = (req,res,next)=>{

    
}