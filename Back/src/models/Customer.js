const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Customer',{
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
          },
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         address: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         zone: {
            type: DataTypes.STRING,
            allowNull: false,
         },
    },{timestamps: false})
}