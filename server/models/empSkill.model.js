module.exports = (sequelize, DataTypes) => {
  sequelize.define('EmployeeSkill', {
    emp_id: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    skill_category: {
      type: DataTypes.TEXT,
    },
    skill_name: {
      type: DataTypes.TEXT,
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