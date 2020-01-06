module.exports = (sequelize, DataTypes) => {
  return sequelize.define('employeesauth', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
    },
    pwd:{
      type: DataTypes.STRING,
      notNull: true,
    }
  }, { freezeTableName: true });
}