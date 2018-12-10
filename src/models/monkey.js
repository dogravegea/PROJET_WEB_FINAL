module.exports = (sequelize, DataTypes) => {
    var Monkey = sequelize.define('Monkey', {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        espece: DataTypes.STRING
    });

    return Monkey;
  };