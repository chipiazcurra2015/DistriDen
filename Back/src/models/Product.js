const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Product',{
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
         },
         denomination: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         category: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         price: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         }
    },{timestamps: false})
}