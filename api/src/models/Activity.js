const {DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
   sequelize.define("Activity", {
        /* id: {
            type: DataTypes.STRING,
            primaryKey: true,
        }, */
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.ENUM("Summer", "Winter", "Spring", "Fall"),
        },
    },{
        timestamps: false
    });
};
