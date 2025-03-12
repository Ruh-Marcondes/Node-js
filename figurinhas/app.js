const express = require('express');

const connection = require('./database/database');

const app = express();

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    })
    .catch(error => {
        console.log(error);
    });

// Models
const Usuario = require('./model/Usuario');
const Tipo = require('./model/tipo');
const Figurinha = require('./model/figurinha');

// Access from Other Origin - CORs
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
})

module.exports = app;
