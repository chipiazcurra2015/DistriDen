const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Zona',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
        localidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigoPostal: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
    },{timestamps: false})
}