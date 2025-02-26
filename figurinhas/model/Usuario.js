const Sequelize = require('sequelize')

const connection = require('../database/database')


const Ususario = connection.define(
        'usuario',{
            email:{
                type:Sequelize.STRING,
                allowNull: false
            },
            nome:{
                type:Sequelize.STRING,
                allowNull: false
            },
            senha:{
                type:Sequelize.STRING,
                allowNull: false
            }
        }
);

//Ususario.sync({force:true});//prineira vez eu rodo depois comenta

module.exports = Ususario;