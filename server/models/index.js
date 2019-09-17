const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('../../config/config');
const models = {};
const sequelizeConnection = new Sequelize(config.db);

fs.readdirSync(__dirname)
  .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach(file => {
    let model = require("./" + file)(sequelizeConnection, Sequelize);
    models[model.name] = model.schema;
  });



// PUT RELATIONSHIP MODELS HERE
// BelongsTo
// HasOne
// HasMany
// BelongsToMany
// for examples
//models.Order.belongsTo(models.User);


module.exports = models;
global.SEQUELIZECONNECTION = sequelizeConnection