module.exports = (sequelize, DataTypes) => {
  return sequelize.define('skills', {
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