const express = require('express');

const connection = require ('./database/database')

const app = express();

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Database

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso')
    })
    .catch(error=>{
        console.log(error);
    });
    
//Model

module.exports = app;
