const Sequelize = require('sequelize');
const db = require('./db');

const products = db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

products.sync();

module.exports = products;