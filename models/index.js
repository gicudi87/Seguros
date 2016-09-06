var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , sequelize = new Sequelize('dlfif85liotv4', 'ppqjojieqnrptk', 'Z0t5tQcBgS02fjYeqalDLIu0pQ', {
      dialect: "postgres", // or,"mysql", 'sqlite', 'postgres', 'mariadb'
      storage: "/tmp/my.db",
      port: "5432",
      host: "ec2-23-21-164-237.compute-1.amazonaws.com"
    })
  , db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return ((file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) == '.js'))
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].hasOwnProperty('associate')) { 
    db[modelName].associate(db)
  }
});

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
