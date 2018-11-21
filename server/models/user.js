var Bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      classMethods: {
        associate: models => {
          models.User.belongsToMany(models.Role, {
            through: models.UserRole,
            foreignKey: "user_id",
            targetKey: "role_id",
            as: "roles"
          });
        }
      },
      getterMethods: {},
      setterMethods: {
        password: function(value) {
          var hashedPassword = Bcrypt.hashSync(value, 10);
          return this.setDataValue("password", hashedPassword);
        }
      },
      instanceMethods: {
        isValidPassword: function(password, callback) {
          Bcrypt.compare(password, this.password, function(error, isMatch) {
            console.log(error);

            if (error) {
              throw error;
            }
            callback(null, isMatch);
          });
        }
      },
      underscored: true,
      freezeTableName: true,
      tableName: "users"
    }
  );

  return User;
};
