const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('User',{
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
          },
          type: {
            type: DataTypes.ENUM('Administrador', 'Vendedor', 'Transportista'),
            allowNull: false,
         },
         firstname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         age: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true,
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
         }
    },{timestamps: false})
}