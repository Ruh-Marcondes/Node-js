const Sequelize = require('sequelize')

const connection = require('../database/database');

const Tipo = require('./Tipo');

const Figurinha = connection.define(
        'figurinha',{
            codigo:{
                type:Sequelize.STRING,
                allowNull: false
            },
            numero:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            tenho:{
                type:Sequelize.BOOLEAN,
                allowNull: false
            },
            rara:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            }
            
        }
);

Figurinha.belongsTo(Tipo);

//Figurinha.sync({force:true});//prineira vez eu rodo depois comenta

module.exports = Figurinha;