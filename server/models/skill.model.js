module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Skills', {
    skill_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    skill_name: {
      type: DataTypes.TEXT,
    },
    skill_category: {
      type: DataTypes.TEXT,
    },
  }, { freezeTableName: true });
}