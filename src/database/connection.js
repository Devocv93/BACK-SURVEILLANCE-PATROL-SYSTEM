const { Sequelize } = require('sequelize');
const { databaseRondin } = require('./config');

const sequelizeRondin = new Sequelize(
    databaseRondin.db, 
    databaseRondin.username, 
    databaseRondin.password, 
        {
            host: databaseRondin.host,
            dialect: 'mysql'
        }
    );
 
module.exports = {
    sequelizeRondin, 
};