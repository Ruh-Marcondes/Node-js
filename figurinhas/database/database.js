const Sequelize = require('sequelize');

const connection = new Sequelize(
    'figutinhas',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;