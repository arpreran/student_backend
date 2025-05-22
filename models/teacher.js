const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Teacher = sequelize.define('Teacher', {
  TeacherID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Subject: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'Teachers'
});

module.exports = Teacher;
