module.exports = (sequelize, DataTypes) => {
    var Enclos = sequelize.define('Enclos', {
        name: DataTypes.STRING,
        taille: DataTypes.INTEGER,
        environnement: DataTypes.STRING
    });

    return Enclos;
};