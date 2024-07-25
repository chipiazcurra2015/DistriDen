const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Venta',{
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
         },
         idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         idProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         category: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         denomination: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         price: {
            type: DataTypes.FLOAT,
            allowNull: false,
         }
    })
}