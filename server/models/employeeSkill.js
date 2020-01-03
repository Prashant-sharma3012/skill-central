module.exports = (sequelize, DataTypes) => {
  return sequelize.define('employeeskill', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    skill_category: {
      type: DataTypes.STRING,
    },
    skill_name: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    num_proj_impl: {
      type: DataTypes.INTEGER,
      notNull: true,
    }
  }, { freezeTableName: true });
}