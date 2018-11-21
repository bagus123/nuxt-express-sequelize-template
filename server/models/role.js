module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    },
    {
      classMethods: {
        associate: models => {}
      },
      getterMethods: {},
      setterMethods: {},
      instanceMethods: {},
      underscored: true,
      freezeTableName: true,
      tableName: "roles"
    }
  );

  return Role;
};
