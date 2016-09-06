module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {

    name: DataTypes.STRING,

    comment: DataTypes.STRING,

    email: DataTypes.STRING,

    telefono: DataTypes.STRING

  });

  return Comments
};
