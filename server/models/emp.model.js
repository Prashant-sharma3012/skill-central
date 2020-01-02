module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Employees',{
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    emp_fname: {
      type: DataTypes.STRING,
      notNull: true,
    },
    emp_lname: {
      type: DataTypes.STRING,
      notNull: true,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    profile_picture: {
      type: DataTypes.STRING,
    }
  }, { freezeTableName: true });
};