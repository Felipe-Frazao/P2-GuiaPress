const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','4752',{
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = connection;


