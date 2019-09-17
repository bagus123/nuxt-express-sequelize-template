var Bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        // validate email https://sequelize.org/master/manual/models-definition.html#validations
        validate: {
          isEmail: true
        }
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'USER'),
        defaultValue: 'USER'
      },
      password: {
        type: DataTypes.STRING,
        // setter https://sequelize.org/master/manual/models-definition.html#getters--amp--setters
        set(val) {
          let hashedPassword = Bcrypt.hashSync(val, 10);
          return this.setDataValue("password", hashedPassword);
        }
      }
    });


  // Adding a class level method
  User.classLevelMethod = () => {
    return 'foo';
  };

  // Adding an instance level method
  User.prototype.instanceLevelMethod = () => {
    return 'bar';
  };

  // Adding an instance level method
  User.prototype.isValidPassword = async (password) => {
    return await Promise((resolve, reject) => {
      Bcrypt.compare(password, this.password, function (error, isMatch) {
        if (error) {
          reject(error)
        }
        resolve(isMatch)
      });
    })
  }


  return { name: 'User', schema: User };
};
