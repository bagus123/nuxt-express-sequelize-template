module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    "UserRole",
    {
      user_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: models => {
          UserRole.belongsTo(models.User, { foreignKey: "user_id" });
          UserRole.belongsTo(models.Role, { foreignKey: "role_id" });
        }
      },
      getterMethods: {},
      setterMethods: {},
      instanceMethods: {},
      underscored: true,
      freezeTableName: true,
      tableName: "user_roles"
    }
  );

  return UserRole;
};
